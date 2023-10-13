import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchSalesReportTableComponent from "./components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBreadProductionTabsComponent from "./components/branch-sales-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
export default function BranchBreadProductionPage(props) {
    const [data, setData] = useState([]);

    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);

    useEffect(() => {
        get_records({
            branchid: branchid,
            params: "done",
        }).then((res) => {
            setData(res.status);
            console.log("res.status", res.status);
            setLoading(false);
        });
    }, [refresh]);
    return (
        <AdministratorLayout>
            <BranchBreadProductionTabsComponent />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSalesReportTableComponent
                    account={auth.user}
                    data={data}
                />
            )}
        </AdministratorLayout>
    );
}
