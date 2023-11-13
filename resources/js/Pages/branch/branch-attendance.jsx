import React, { useState, useEffect } from "react";
import AdministratorLayout from "@/Layouts/administrator-layout";
// import AccountTable from "./components/account-table";
// import Search from "@/_components/search";
import SidebarBranches from "../_components/sidebar-branches";
import Breadcrumbs from "@/_components/bread-crumbs";
import { get_branch_accounts } from "@/services/account-services";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";
import AttendanceTable from "../branch_attendance/components/attendance-table";
import BranchLayout from "@/Layouts/branch-layout";
import BranchAttendancePage from "../branch_attendance/page";
export default function BranchAttendancePages(props) {

    const { url } = usePage();
    const branchid = url.split('/')[2]
   

    return (
        <BranchLayout>
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs />
                {/* <Search search={search} setSearch={setSearch} /> */}
                {/* <AccountTable data={search == "" ? accounts : newData}/> */}
                <AttendanceTable
                branchid={props.auth.user.position == 'admin'?branchid:props.auth.user.branchid}/>
            </div>
        </BranchLayout>
    );
}
