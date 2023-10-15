import BranchTopNavbar from "@/_components/branch-top-navbar";
import Breadcrumbs from "@/_components/bread-crumbs";
import { Head } from "@inertiajs/react";
import ToastNotification from "@/_components/toast-notification";
import { useSelector } from "react-redux";


export default function BranchLayout({ children,branchid }) {
    const { response, isSideBar } = useSelector((state) => state.app);

    async function resp() {
        return await response;
    }

    return (
        <div className="flex">
            <Head title="GB Bakeshop" />
            <div className="flex flex-row h-screen w-screen">
                <div className="flex-1">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex-none">
                            <BranchTopNavbar />
                        </div>
                        <div className="flex-1">
                            <main className="h-[90vh] p-3 flex-1 overflow-auto">
                                {response.length !== 0 && (
                                    <ToastNotification response={resp()} />
                                )}
                                <Breadcrumbs branchid={branchid}/>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
