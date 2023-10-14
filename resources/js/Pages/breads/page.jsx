import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BreadTableComponent from "./components/bread-table";
import { get_all_breads } from "@/services/breads-services.js";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";
export default function BreadsPage(props) {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { refresh } = useSelector((state) => state.app);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_all_breads().then((res) => {
            setData(res);
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
        <AdministratorLayout>
            <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BreadTableComponent data={search == "" ? data : newData} />
            )}
        </AdministratorLayout>
    );
}
