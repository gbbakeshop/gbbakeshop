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
import { setExpenses,setCharge } from "./_redux/branch-expenses-slice";
import BranchSearchExpenses from "./components/branch-search-expenses";
import CreditsChargeTable from "./components/credits-charge-table";
import { get_branch_expenses } from "@/services/expenses-services";
import { get_all_credits_charge } from "@/services/credits-services";

export default function BranchBakersReportPage(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const { refresh } = useSelector((state) => state.app);
    const { expenses,charges } = useSelector((state) => state.branchExpenses);
    const [newData, setNewData] = useState([]);
    const [newData2, setNewData2] = useState([]);
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");
  

    useEffect(() => {
        get_all_credits_charge(branchid).then((res) => {
            dispatch(setCharge(res));
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        get_branch_expenses(branchid).then((res)=>{
            dispatch(setExpenses(res));
            // console.log('heheheh',res)
        })
    }, [refresh]);
    
    useEffect(() => {
        const value = charges?.filter((obj) =>
            obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
        );

        const value2 = expenses?.filter((obj) =>
            obj?.name?.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
        setNewData2(value2)
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
                    <>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-auto w-auto col-span-2">
                                <CreditsChargeTable 
                                  data={search == "" ? charges : newData}/>
                            </div>
                            <div className="h-auto w-auto  col-span-2">
                                <BranchExpensesTable
                                    data={search2 == "" ? expenses : newData2}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AdministratorLayout>
    );
}
