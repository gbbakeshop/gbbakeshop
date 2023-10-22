import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchBreadProductionTableComponent from "./components/branch-bread-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBreadProductionTabsComponent from "./components/branch-bread-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";

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
            params: "bread",
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
    }, [search]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <BranchBreadProductionTabsComponent />
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchBreadProductionTableComponent
                        account={auth.user}
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
