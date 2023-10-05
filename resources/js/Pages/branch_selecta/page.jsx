import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchSelectaTableComponent from "./components/branch-selecta-table";
import { get_branch_selecta } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";

export default function BranchSelectaPage(props) {
    const [data, setData] = useState([]);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_branch_selecta(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return (
        <AdministratorLayout>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSelectaTableComponent data={data} />
            )}
        </AdministratorLayout>
    );
}
