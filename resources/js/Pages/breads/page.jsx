import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BreadTableComponent from "./components/bread-table";
import { get_all_breads } from "@/services/breads-services.js";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
export default function BreadsPage(props) {
    const [data, setData] = useState([]);
    const { refresh } = useSelector((state) => state.app)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_all_breads().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    return (
        <AdministratorLayout>
            {loading ? <SkeletonLoader /> : <BreadTableComponent data={data} />}
        </AdministratorLayout>
    );
}
