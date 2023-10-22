import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchRawMaterialsTableComponent from "./components/branch-raw-materials-table";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";

export default function BranchRawMaterialsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.raw_materials.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    useEffect(() => {
        get_branch_raw_materials(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchRawMaterialsTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
