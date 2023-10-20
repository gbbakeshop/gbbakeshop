import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchSalesReportTableComponent from "./components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBreadProductionTabsComponent from "./components/branch-sales-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";

export default function BranchBreadProductionPage(props) {
    const [data, setData] = useState([]);

    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

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

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.bread_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);
    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full h-screen p-4">
                <BranchBreadProductionTabsComponent />
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                  
                        <BranchSalesReportTableComponent
                            account={auth.user}
                            data={search == "" ? data : newData}
                        />
                )}
            </div>
        </AdministratorLayout>
    );
}
