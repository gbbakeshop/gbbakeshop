import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSelectaTableComponent from "../branch_selecta/components/branch-selecta-table";
import { get_branch_selecta } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";

export default function SelectaPage(props) {
    const { auth } = props;
    const branchid = auth.user.branchid;
    const [data, setData] = useState([]);
    const { url } = usePage();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_branch_selecta(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return (
        <BranchLayout>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSelectaTableComponent data={data} />
            )}
        </BranchLayout>
    );
}
