import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
// import BranchBakersReportTableComponent from "./components/branch-bakers-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchHistoryTabsComponent from "./components/branch-history-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useDispatch, useSelector } from "react-redux";
// import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import BranchHistoryTable from "./components/branch-history-table";
import { get_branch_history } from "@/services/history-services";
import moment from "moment";
import { setHistory } from "./_redux/branch-history-slice";
import BranchSearchHistory from "./components/branch-search-history";
export default function BranchBakersReportPage(props) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const { history } = useSelector((state) => state.branchHistory);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { auth } = props;

    useEffect(() => {
        get_branch_history(moment().format('L')).then((res) => {
            dispatch(setHistory(res))
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = history?.filter((obj) =>
            obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search, refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <BranchHistoryTabsComponent />
                <br />
                <BranchSearchHistory />
                {/* <Search search={search} setSearch={setSearch} /> */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchHistoryTable
                        data={search == "" ? history : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
