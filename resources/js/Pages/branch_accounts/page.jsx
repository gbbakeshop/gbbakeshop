import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import AccountTable from "./components/account-table";
import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";

export default function BranchAccountsPage(props) {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full h-screen p-4">
                <Search search={search} setSearch={setSearch} />
                <AccountTable />
            </div>
        </AdministratorLayout>
    );
}
