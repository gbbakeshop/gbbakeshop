import AdministratorLayout from "@/Layouts/administrator-layout";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountTabs from "../branch_accounts/components/account-tabs";
import AccountProfile from "../branch_accounts/components/account-profile";
export default function AccountHistoryPage() {
    return (
        <AdministratorLayout>
            <SidebarBranches />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                <AccountProfile />
                <AccountTabs />
            </div>
        </AdministratorLayout>
    );
}
