import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import Breadcrumbs from "@/_components/bread-crumbs";
import { Head } from "@inertiajs/react";
import ToastNotification from "./components/toast-notification";
import { useSelector } from "react-redux";
import SidebarCategories from "./components/sidebar-categories";

export default function AdministratorLayout({ children }) {
    const { setResponse, isSideBar } = useSelector((state) => state.app);
  
    return (
        <aside className="flex">
            <div>
                <SidebarCategories />
                <ToastNotification response={setResponse} />
            </div>
            {/* <Breadcrumbs /> */}
            {children}
        </aside>
    );
}
