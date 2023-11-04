import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchBreadProductionTableComponent from "../branch_bakers_production/components/bread-table";
import { get_all_recipes } from "@/services/recipes-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { get_branch_raw_materials } from "@/services/raw-materials-services";
import { useSelector } from "react-redux";

export default function BreadProductionPage(props) {
    const { auth } = props;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid =
        url.split("/")[2] == "bread-production"
            ? auth.user.branchid
            : url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);

    useEffect(() => {
        get_all_recipes(branchid).then((res) => {
            setData(res);
            setLoading(false);
        });
        get_branch_raw_materials(branchid).then((res) => {
            setData2(res);
        });
    }, [refresh]);
    return (
        <BranchLayout  
        position={auth.user.position}
        branchid={auth.user.branchid}
        >
            <ProductionTabsComponent 
             position={auth.user.position}
            branchid={auth.user.branchid} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchBreadProductionTableComponent
                    account={auth.user}
                    branchid={branchid}
                    data2={data2}
                    data={data.length == 0 ? [] : data}
                />
            )}
        </BranchLayout>
    );
}
