import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_branch_selecta_history } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import BranchSelectaTabs from "./components/tab";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "./_redux/branch-selecta-slice";
import BranchSelectaHistoryTableComponent from "./components/branch-selecta-history-table";
import BranchSelectaSearchDateHistory from "./components/branch-selecta-search-date-history";

export default function BranchSelectaHistoryPage(props) {
    const { url } = usePage();
   
    const branchid = props.auth.user.position == 'admin'?url.split("/")[2]:props.auth.user.branchid;
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { refresh } = useSelector((state) => state.app);
    const { history } = useSelector((state) => state.branchSelecta);
    const dispatch = useDispatch()
    
    useEffect(() => {
        get_branch_selecta_history({
            date:moment().format('L'),
            branchid:branchid,
        }).then((res) => {
            dispatch(setHistory(res));
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = history.filter((obj) =>
            obj.user.name?.toLowerCase().includes(search?.toLowerCase())
        );
        setNewData(value);
    }, [search,refresh]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                {/* <Search search={search} setSearch={setSearch} /> */}
                <div className="flex gap-4">
                    <div className="flex-none">
                    <BranchSelectaSearchDateHistory  branchid={branchid}/>
                    </div>
                    <div className="flex-1">
                    {/* <Search search={search} setSearch={setSearch} />  */}
                    </div>
                </div>
                <BranchSelectaTabs branchid={branchid}/>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchSelectaHistoryTableComponent
                    userid={props.auth.user.id}
                        data={search == "" ? history : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
