import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSalesReportTableComponent from "../branch_sales_report/components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useSelector } from "react-redux";
import Search from "@/_components/search";


export default function SalesReportPage(props) {
    const [data, setData] = useState([]);

    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = auth.user.branchid;
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_records({
            branchid: branchid,
            params: "done",
        }).then((res) => {
            setData(res.status);
            console.log("res.status", res.status);
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
        <BranchLayout  branchid={auth.user.branchid} >
            <ProductionTabsComponent />
            <br />
            <Search search={search} setSearch={setSearch} />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSalesReportTableComponent
                    account={auth.user}
                    data={search == "" ? data : newData}
                />
            )}
        </BranchLayout>
    );
}
