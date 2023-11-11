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
import { setExpenses, setCharge } from "./_redux/branch-expenses-slice";
import BranchSearchExpenses from "./components/branch-search-expenses";
import CreditsChargeTable from "./components/credits-charge-table";
import { get_branch_expenses } from "@/services/expenses-services";
import { get_all_credits_charge } from "@/services/credits-services";
import SalesChart from "./components/sales-chart";
import Domination from "./components/domination";

export default function BranchBakersReportPage(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const { expenses, charges, date } = useSelector(
        (state) => state.branchExpenses
    );
    const [newData, setNewData] = useState([]);
    const [newData2, setNewData2] = useState([]);
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");

    useEffect(() => {
        get_all_credits_charge(branchid, date).then((res) => {
            dispatch(setCharge(res));
            setLoading(false);
        });
        get_branch_expenses(branchid, date).then((res) => {
            dispatch(setExpenses(res));
        });
    }, [refresh, date]);

    useEffect(() => {
        const value = charges?.filter((obj) =>
            obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
        );

        const value2 = expenses?.filter((obj) =>
            obj?.name?.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
        setNewData2(value2);
    }, [search, refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <br />

                {/* <Search search={search} setSearch={setSearch} /> */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <>
                        <SalesChart />
                        <BranchSearchExpenses />
                        <div className="grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5">
                            <div className="col-span-2 h-auto w-auto ">
                            <CreditsChargeTable 
                                  data={search == "" ? charges : newData}/>
                            </div>
                            <div className="row-span-2 col-span-2 h-auto w-auto ">
                            <BranchExpensesTable
                                    data={search2 == "" ? expenses : newData2}
                                />
                            </div>
                            <div className="row-span-3 h-auto w-auto ">
                                <Domination />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AdministratorLayout>
    );
}
