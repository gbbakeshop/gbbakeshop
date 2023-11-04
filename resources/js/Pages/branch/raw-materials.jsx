import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchRawMaterialsTableComponent from "../branch_raw_materials/components/branch-raw-materials-table";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";

export default function RawMaterialsPage(props) {
    const { auth } = props;
    const branchid = auth.user.branchid;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_branch_raw_materials(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.raw_materials.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);
    return (
        <BranchLayout
        position={auth.user.position}
        branchid={auth.user.branchid} >
            <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchRawMaterialsTableComponent
                    position={auth.user.position}
                    data={search == "" ? data : newData}
                />
            )}
        </BranchLayout>
    );
}
