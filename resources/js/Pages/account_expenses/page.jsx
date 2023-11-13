import AdministratorLayout from "@/Layouts/administrator-layout";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountTabs from "../branch_accounts/components/account-tabs";
import AccountProfile from "../branch_accounts/components/account-profile";
import AccountExpensesTable from "./components/account-expenses-table";

export default function AccountExpensesPage(props) {
    const {auth} =props
    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen ">
                <image width={1000} src="public/images/1699152060_1682346813188.png" />
                {/* <Breadcrumbs />
                <AccountProfile />
                <AccountTabs /><br />
                <AccountExpensesTable /> */}
            </div>
        </AdministratorLayout>
    );
}
