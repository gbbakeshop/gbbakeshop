import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_selecta } from "@/services/selecta-services";
import SelectaTableComponent from "./components/selecta-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";
import { useSelector } from "react-redux";
import BranchSelectaTabs from "../branch_selecta/components/tab";

export default function SelectaPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { refresh } = useSelector((state) => state.app);
   
    useEffect(() => {
        get_all_selecta().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.product_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search,refresh]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Search search={search} setSearch={setSearch} />
               
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <SelectaTableComponent
                    
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
