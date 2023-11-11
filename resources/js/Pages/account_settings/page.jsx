import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountTabs from "../branch_accounts/components/account-tabs";
import AccountProfile from "../branch_accounts/components/account-profile";
import BranchSettingsEditForm from "./components/edit-form";
import { get_specific_accounts } from '@/services/account-services';
import { usePage } from '@inertiajs/react';
import { useSelector } from 'react-redux';
export default function AccountSettingsPage(props) {
    const { account } = useSelector((state) => state.branchAccount);
  

    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <AccountProfile />
                <AccountTabs />
                <BranchSettingsEditForm positions={ props.auth.user.position} data={account}/>
            </div>
        </AdministratorLayout>
    );
}
