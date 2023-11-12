import AdministratorLayout from "@/Layouts/administrator-layout";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountTabs from "../branch_accounts/components/account-tabs";
import AccountProfile from "../branch_accounts/components/account-profile";
import BranchAccountHistory from "../branch/components/account-history";
import { get_user_histories } from "@/services/history-services";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import BranchLayout from "@/Layouts/branch-layout";
import AttendanceTable from "../account_attendance/components/attendance-table";
import BranchAccountTabs from "./components/account-settings-tab";

export default function AccountAttendancePage(props) {
    const { auth } = props;
    const [data, setData] = useState([]);
    const { url } = usePage();
    const [find, setFind] = useState("production");
    const [loading, setLoading] = useState(true);
    const userid = url.split("/")[4] ?? auth.user.id;
    const branchid = url.split("/")[4]
        ? auth.user.branchid
        : auth.user.branchid;

    return (
        <BranchLayout>
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs branchid={auth.user.branchid} />
                <AccountProfile id={auth.user.id} />
                <BranchAccountTabs
                    branch={auth.user.branchid}
                    id={auth.user.id}
                />
                <AttendanceTable branchid={branchid} userid={userid} />
            </div>
        </BranchLayout>
    );
}
