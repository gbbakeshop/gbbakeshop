import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchAnalyticsSearch from "../branch_analytics/components/branch-analytics-search";
import { BranchLineChart } from "../branch_analytics/components/branch-line-chart";
import { BranchBarChart } from "../branch_analytics/components/branch-bar-chart";
import { useSelector } from "react-redux";
import { get_branch_period } from "@/services/records-services";
import { useEffect, useState } from "react";

export default function BranchDashboardPage(props) {
    const [data, setData] = useState({
        sales: [],
        charges: [],
        expenses: [],
    });

    const { period } = useSelector((state) => state.branchAnalytics);
    const { auth } = props;
    const { url } = usePage();
    const branchid =
        url.split("/")[2] == "bread-report"
            ? auth.user.branchid
            : url.split("/")[2];

            useEffect(() => {
                get_branch_period(period,auth.user.branchid).then((res) => {
                    
                   setData({
                      ...data,
                      sales:res.records,
                      charges:res.charges,
                      expenses:res.expenses
                    })
                });
            }, [period]);
        
    return (
        <BranchLayout 
        position={auth.user.position}
        branchid={branchid}>
            <BranchAnalyticsSearch />
            <div className="flex">
                <div className="w-1/2">
                    <BranchLineChart datas={data}/>
                </div>
                <div className="w-1/2">
                    <BranchBarChart datas={data}/>
                </div>
            </div>
        </BranchLayout>
    );
}
