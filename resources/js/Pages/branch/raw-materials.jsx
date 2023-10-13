import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchRawMaterialsTableComponent from "../branch_raw_materials/components/branch-raw-materials-table";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";

export default function RawMaterialsPage(props) {
    const { auth } = props;
    const branchid = auth.user.branchid;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const { refresh } = useSelector((state) => state.app);
    useEffect(() => {
        get_branch_raw_materials(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    return (
        <BranchLayout>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchRawMaterialsTableComponent data={data} />
            )}
        </BranchLayout>
    );
}
