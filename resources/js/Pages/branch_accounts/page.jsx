import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import AccountTable from "./components/account-table";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import { get_branch_accounts } from "@/services/account-services";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";

export default function BranchAccountsPage(props) {
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { url } = usePage();
    const branchid = url.split('/')[2]
    const [accounts,setAccounts] = useState([])
    const { refresh } = useSelector((state) => state.app);
    useEffect(() => {
        get_branch_accounts(branchid)
        .then(res=>{
            setAccounts(res)
        })
    }, [refresh]);

    useEffect(() => {
        const value = accounts.filter((obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

 

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <Search search={search} setSearch={setSearch} />
                <AccountTable data={search == "" ? accounts : newData}/>
            </div>
        </AdministratorLayout>
    );
}
