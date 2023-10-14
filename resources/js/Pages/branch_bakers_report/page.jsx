import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchBakersReportTableComponent from "./components/branch-bakers-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBakersReportTabsComponent from "./components/branch-bakers-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";

export default function BranchBakersReportPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app)
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
        <AdministratorLayout>
            <BranchBakersReportTabsComponent /><br />
             <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchBakersReportTableComponent data={search == "" ? data : newData}  />
            )}
        </AdministratorLayout>
    );
}
