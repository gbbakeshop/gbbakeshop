import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_raw_materials } from "@/services/raw-materials-services";
import RawMaterialsTableComponent from "./components/raw-materials-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import RawMaterialsTabsComponent from "./components/raw-materials-tabs";
import { useSelector } from "react-redux";

export default function RawMaterialsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app)

    useEffect(() => {
        get_all_raw_materials().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);
    return (
        <AdministratorLayout>
            <RawMaterialsTabsComponent />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <RawMaterialsTableComponent data={data} />
            )}
        </AdministratorLayout>
    );
}
