import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSalesReportTableComponent from "../branch_sales_report/components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import ProductionTabsComponent from "./components/production-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useDispatch, useSelector } from "react-redux";
import Search from "@/_components/search";
import BranchHistoryTable from "../branch_history/components/branch-history-table";
import BranchSearchHistory from "../branch_history/components/branch-search-history";
import { get_branch_history } from "@/services/history-services";
import moment from "moment";
import { setHistory } from "../branch_history/_redux/branch-history-slice";

export default function BranchSalesHistoryPage(props) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const { history } = useSelector((state) => state.branchHistory);
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_branch_history(moment().format("L")).then((res) => {
            dispatch(setHistory(res));
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
            <BranchSearchHistory />
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchHistoryTable
                    account={auth.user}
                    data={search == "" ? history : newData}
                />
            )}
        </BranchLayout>
    );
}
