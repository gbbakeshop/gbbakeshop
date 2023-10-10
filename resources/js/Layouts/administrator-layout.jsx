import TopNavbar from "@/_components/top-navbar";
import SideNavbar from "@/_components/side-navbar";
import Breadcrumbs from "@/_components/bread-crumbs";
import { Head } from "@inertiajs/react";
import ToastNotification from "@/_components/toast-notification";
import { useSelector } from "react-redux";
export default function AdministratorLayout({ children }) {
    const { response, isSideBar } = useSelector((state) => state.app);

    async function resp() {
        return await response;
    }

    return (
        <div className="flex">
            <Head title="GB Bakeshop" />
            {/* Side Navbar */}
            {isSideBar && (
                <aside className="bg-gray-800 text-white w-64 min-h-screen">
                    {/* Your side navbar content here */}
                    <SideNavbar />
                </aside>
            )}

            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <nav>
                    <TopNavbar />
                </nav>

                {/* Content */}
                <main className="bg-gray-100 p-3 flex-1 overflow-auto">
                    {response.length !== 0 && (
                        <ToastNotification response={resp()} />
                    )}
                    <Breadcrumbs />
                    {children}
                </main>
            </div>
        </div>
    );
}
