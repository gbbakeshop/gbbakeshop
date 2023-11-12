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
    const [find, setFind] = useState("production");
    const [loading, setLoading] = useState(true);
    const userid = url.split("/")[4]??auth.user.id;

    useEffect(() => {
        setLoading(true)
     if (find == "selecta") {
         get_user_histories(userid, "selecta").then((res) => {
             setData(res);
             setLoading(false);
         });
     } else {
         get_user_histories(userid, "production").then((res) => {
             setData(res);
             setLoading(false);
         });
     }
 }, [find]);
    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <AccountProfile />
                <AccountTabs />
                <div className="m-2 ">
                    <button
                        class={`${
                            find == "production" ? "bg-red-500 text-white" : ""
                        } mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`}
                        onClick={() => setFind("production")}
                    >
                        Production History
                    </button>
                    <button
                        class={`${
                            find == "selecta" ? "bg-red-500 text-white" : ""
                        } hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`}
                        onClick={() => setFind("selecta")}
                    >
                        Selecta History
                    </button>
                </div>
                <BranchAccountHistory data={data}/>
            </div>
        </AdministratorLayout>
    );
}
