import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import Breadcrumbs from "@/_components/bread-crumbs";
import { Head } from "@inertiajs/react";
import ToastNotification from "./components/toast-notification";
import { useSelector } from "react-redux";
import SidebarCategories from "./components/sidebar-categories";

export default function AdministratorLayout({ children }) {
    const { response, isSideBar } = useSelector((state) => state.app);
  
    console.log('response',response)
    return (
        <aside className="flex">
            <div>
                <SidebarCategories />
                <ToastNotification response={response} />
            </div>
            {/* <Breadcrumbs /> */}
            {children}
        </aside>
    );
}
