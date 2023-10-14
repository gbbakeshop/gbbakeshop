import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_raw_materials } from "@/services/raw-materials-services";
import RawMaterialsTableComponent from "./components/raw-materials-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import RawMaterialsTabsComponent from "./components/raw-materials-tabs";
import { useSelector } from "react-redux";
import Search from "@/_components/search";

export default function RawMaterialsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app)
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        const value = data.filter((obj) =>
            obj.raw_materials.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    useEffect(() => {
        get_all_raw_materials().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);
    return (
        <AdministratorLayout>
            <RawMaterialsTabsComponent /><br />
            <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <RawMaterialsTableComponent  data={search == "" ? data : newData}  />
            )}
        </AdministratorLayout>
    );
}
