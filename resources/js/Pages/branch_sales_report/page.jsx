import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchSalesReportTableComponent from "./components/branch-sales-report-table";
import { get_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import BranchBreadProductionTabsComponent from "./components/branch-sales-report-tabs";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useDispatch, useSelector } from "react-redux";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import BranchSalesReportSearch from "./components/branch-sales-report-search-date";
import { setRecord } from "./_redux/sales-report-slice";
import moment from "moment";
export default function BranchBreadProductionPage(props) {
    const dispatch = useDispatch()
    const { auth } = props;
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { records } = useSelector((state) => state.salesReport);

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
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col h-screen w-[79vw] p-4 overflow-auto">
                <Breadcrumbs />
                <BranchBreadProductionTabsComponent />
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
            </div>
        </AdministratorLayout>
    );
}
