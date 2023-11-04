import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchBakersReportTableComponent from "../branch_bakers_report/components/branch-bakers-report-table";
import { get_all_recipes } from "@/services/recipes-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { get_records } from "@/services/records-services";
import { useSelector } from "react-redux";
import Search from "@/_components/search";

export default function BakersReportPage(props) {
    const { auth } = props;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid =
        url.split("/")[2] == "bakers-report"
            ? auth.user.branchid
            : url.split("/")[2];

    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

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
    }, [search]);
    return (
        <BranchLayout  
        
        position={auth.user.position}
        branchid={auth.user.branchid} >
            <ProductionTabsComponent 
            
        position={auth.user.position}/>
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
        </BranchLayout>
    );
}
