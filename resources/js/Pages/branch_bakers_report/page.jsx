import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchBakersReportTableComponent from "./components/branch-bakers-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBakersReportTabsComponent from "./components/branch-bakers-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";

export default function BranchBakersReportPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const {auth} = props
  
    useEffect(() => {
        get_records({
            branchid: branchid,
            params: "bakers",
        }).then((res) => {
            setData(res.status);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.bread_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search, refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
            <Breadcrumbs />
                <BranchBakersReportTabsComponent />
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchBakersReportTableComponent
                        account={auth.user}
                        branchid={branchid}
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
