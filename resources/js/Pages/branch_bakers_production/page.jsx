import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchBreadProductionTableComponent from "./components/bread-table";
import { get_all_recipes } from "@/services/recipes-services";
import { usePage } from "@inertiajs/react";
import BranchBreadProductionTabsComponent from "./components/branch-bakers-production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";

export default function BranchBreadProductionPage(props) {
    const { auth } = props;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_all_recipes(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
        get_branch_raw_materials(branchid).then((res) => {
            setData2(res);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data?.map((res) =>
            res?.selected_breads?.filter((obj) =>
                obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
            )
        );
        setNewData(
            data.map((res, index) => ({
                ...res,
                selected_breads: value[index],
            }))
        );
    }, [search, data]);

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
                        branchid={branchid}
                        data2={data2}
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
