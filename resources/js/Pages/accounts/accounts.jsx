import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_accounts } from "@/services/account-services";
import AccountsTableComponent from "./components/accounts-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";
import AccountTabs from "./components/account-tabs";
import { useSelector } from "react-redux";
export default function AccountsPage(props) {
    
    const { refresh } = useSelector((state) => state.app);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_all_accounts().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <div className="mb-7">
                    <AccountTabs />
                </div>
                <Search search={search} setSearch={setSearch} />
                <br />
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
