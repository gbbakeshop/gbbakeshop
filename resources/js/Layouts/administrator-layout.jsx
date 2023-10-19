import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import Breadcrumbs from "@/_components/bread-crumbs";
import { Head } from "@inertiajs/react";
import ToastNotification from "@/_components/toast-notification";
import { useSelector } from "react-redux";
import SidebarCategories from "./components/sidebar-categories";

export default function AdministratorLayout({ children }) {
    const { response, isSideBar } = useSelector((state) => state.app);
    async function resp() {
        return await response;
    }

    return (
        <aside className="flex">
            <div>
                <SidebarCategories />
            </div>
            {/* <Breadcrumbs /> */}
            {children}
        </aside>
    );
}
