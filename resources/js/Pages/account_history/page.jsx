import AdministratorLayout from "@/Layouts/administrator-layout";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountTabs from "../branch_accounts/components/account-tabs";
import AccountProfile from "../branch_accounts/components/account-profile";
import BranchAccountHistory from "../branch/components/account-history";
import { get_user_histories } from "@/services/history-services";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
export default function AccountHistoryPage(props) {
    const {auth} =props 
    const [data,setData] = useState([])
    const { url } = usePage();
    const userid = url.split("/")[4]??auth.user.id;

    useEffect(() => {
     get_user_histories(userid)
     .then(res=>{
          setData(res)
     })
    }, []);
    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <AccountProfile />
                <AccountTabs />
                <BranchAccountHistory data={data}/>
            </div>
        </AdministratorLayout>
    );
}
