import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchSelectaTableComponent from "./components/branch-selecta-table";
import { get_branch_selecta } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";

export default function BranchSelectaPage(props) {
    const [data, setData] = useState([]);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_branch_selecta(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.product_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full h-full p-4">
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchSelectaTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
