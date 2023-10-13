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
            <div className="flex flex-row h-screen w-screen">
                {isSideBar && (
                    <div className="flex-none">
                        <SideNavbar />
                    </div>
                )}

                <div className="flex-1">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex-none">
                            <TopNavbar />
                        </div>
                        <div className="flex-1">
                            <main className="h-[90vh] p-3 flex-1 overflow-auto">
                                {response.length !== 0 && (
                                    <ToastNotification response={resp()} />
                                )}
                                <Breadcrumbs />
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
