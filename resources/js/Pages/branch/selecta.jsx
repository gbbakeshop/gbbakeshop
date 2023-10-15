import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSelectaTableComponent from "../branch_selecta/components/branch-selecta-table";
import { get_branch_selecta } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";

export default function SelectaPage(props) {
    const { auth } = props;
    const branchid = auth.user.branchid;
    const [data, setData] = useState([]);
    const { url } = usePage();
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
        <BranchLayout  branchid={auth.user.branchid} >
             <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSelectaTableComponent  data={search == "" ? data : newData}  />
            )}
        </BranchLayout>
    );
}
