import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
// import BranchRawMaterialsTableComponent from "./components/branch-raw-materials-table";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
// import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import { BranchLineChart } from "./components/branch-line-chart";
import { BranchBarChart } from "./components/branch-bar-chart";
import BranchAnalyticsSearch from "./components/branch-analytics-search";
import BranchAnalyticsSales from "./components/branch-analytics-sales";
import { get_branch_period } from "@/services/records-services";
import SalesChart from "../branch_expenses/components/sales-chart";

export default function BranchAnalyticsPage(props) {
    const [data, setData] = useState({
        sales: [],
        charges: [],
        expenses: [],
    });

    const { period } = useSelector((state) => state.branchAnalytics);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     const value = data.filter((obj) =>
    //         obj.raw_materials.toLowerCase().includes(search.toLowerCase())
    //     );
    //     setNewData(value);
    // }, [search]);

    // useEffect(() => {
    //     get_branch_raw_materials(branchid).then((res) => {
    //         setData(res);
    //         setLoading(false);
    //     });
    // }, [refresh]);


    useEffect(() => {
        get_branch_period(period,branchid).then((res) => {
            console.log('data',res)
           setData({
              ...data,
              sales:res.records,
              charges:res.charges,
              expenses:res.expenses
            })
        });
    }, [period]);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                {/* <Search search={search} setSearch={setSearch} /> */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <>
                        <BranchAnalyticsSearch />
                        <div className="w-full mt-8">
                                {/* <BranchAnalyticsSales 
                                period={period}/> */}
                                <SalesChart />
                            </div>
                        <div className="flex">
                            <div className="w-1/2">
                            <BranchLineChart datas={data}/>
                            </div>
                            <div className="w-1/2">
                            <BranchBarChart datas={data}/>
                            </div>
                        </div>
                        {/* <div className="md:px-52">
                            <BranchLineChart />
                            <BranchBarChart />
                        </div> */}
                    </>
                )}
            </div>
        </AdministratorLayout>
    );
}
