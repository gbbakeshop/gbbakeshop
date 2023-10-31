import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import { useDispatch, useSelector } from "react-redux";
// import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import BranchExpensesTable from "./components/branch-expenses-table";
import { get_branch_history } from "@/services/history-services";
import moment from "moment";
import { setExpenses } from "./_redux/branch-expenses-slice";
import BranchSearchExpenses from "./components/branch-search-expenses";
import CreditsChargeTable from "./components/credits-charge-table";

export default function BranchBakersReportPage(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const { expenses } = useSelector((state) => state.branchExpenses);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { auth } = props;

    useEffect(() => {
        get_branch_history(moment().format("L")).then((res) => {
            dispatch(setExpenses(res));
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = expenses?.filter((obj) =>
            obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search, refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <br />
                <BranchSearchExpenses />
                {/* <Search search={search} setSearch={setSearch} /> */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <div class="h-auto w-auto">
                            <CreditsChargeTable />
                        </div>
                        <div class="h-auto w-auto">02</div>
                        <div class="h-auto w-auto">03</div>
                        <div class="h-auto w-auto">04</div>
                    </div>
                    // <BranchExpensesTable
                    //     data={search == "" ? expenses : newData}
                    // />
                )}
            </div>
        </AdministratorLayout>
    );
}
