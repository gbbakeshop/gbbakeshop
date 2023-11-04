import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSalesReportTableComponent from "../branch_sales_report/components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useDispatch, useSelector } from "react-redux";
import Search from "@/_components/search";
import BranchSalesReportSearch from "../branch_sales_report/components/branch-sales-report-search-date";
import { setRecord } from "../branch_sales_report/_redux/sales-report-slice";
import moment from "moment";

export default function SalesReportPage(props) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const { records } = useSelector((state) => state.salesReport);
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
            date:moment().format('L')
        }).then((res) => {
            dispatch(setRecord(res.status))
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = records.filter((obj) =>
            obj.bread_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);
    return (
        <BranchLayout 
        
        position={auth.user.position}
        branchid={auth.user.branchid}>
            <ProductionTabsComponent 
            
        position={auth.user.position}/>
            <br />
            <div className="flex gap-4">
                <div className="flex-none">
                    <BranchSalesReportSearch />
                </div>
                <div className="flex-1">
                    <Search search={search} setSearch={setSearch} />
                </div>
            </div>

            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSalesReportTableComponent
                    account={auth.user}
                    data={search == "" ? records : newData}
                />
            )}
        </BranchLayout>
    );
}
