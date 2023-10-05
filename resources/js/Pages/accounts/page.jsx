import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_accounts } from "@/services/account-services";
import AccountsTableComponent from "./components/accounts-table";
import SkeletonLoader from "@/_components/skeleton-loader";

export default function AccountsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_all_accounts().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);
    return (
        <AdministratorLayout>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <AccountsTableComponent data={data} />
            )}
        </AdministratorLayout>
    );
}
