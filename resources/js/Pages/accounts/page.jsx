import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_accounts } from "@/services/account-services";
import AccountsTableComponent from "./components/accounts-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";

export default function AccountsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_all_accounts().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-screen h-full p-4">
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <AccountsTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
