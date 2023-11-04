import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchBreadReportTableComponent from "../branch_bread_report/components/branch-bread-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";

export default function BreadReportPage(props) {
    const [data, setData] = useState([]);
    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { url } = usePage();
    const branchid =
        url.split("/")[2] == "bread-report"
            ? auth.user.branchid
            : url.split("/")[2];

    useEffect(() => {
        get_records({
            branchid: branchid,
            params: "bread",
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
            branchid={auth.user.branchid}
        >
            <ProductionTabsComponent position={auth.user.position} />
            <br />
            <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchBreadReportTableComponent
                    account={auth.user}
                    data={search == "" ? data : newData}
                />
            )}
        </BranchLayout>
    );
}
