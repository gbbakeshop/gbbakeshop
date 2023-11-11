import BranchLayout from "@/Layouts/branch-layout";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountProfile from "../branch_accounts/components/account-profile";
import BranchAccountTabs from "./components/account-settings-tab";
import { get_user_histories } from "@/services/history-services";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import BranchAccountHistory from "./components/account-history";
import AccountHistory2 from "./components/account-history2";
import SkeletonLoader from "@/_components/skeleton-loader";

export default function AccountLogs(props) {
    const { auth } = props;
    const [data, setData] = useState([]);
    const { url } = usePage();
    const userid = url.split("/")[4] ?? auth.user.id;
    const [loading, setLoading] = useState(true);
    const [find, setFind] = useState("production");
    useEffect(() => {
           setLoading(true)
        if (find == "selecta") {
            get_user_histories(userid, "selecta").then((res) => {
                setData(res);
                setLoading(false);
            });
        } else {
            get_user_histories(userid, "production").then((res) => {
                setData(res);
                setLoading(false);
            });
        }
    }, [find]);

    return (
        <BranchLayout
            position={auth.user.position}
            branchid={auth.user.branchid}
        >
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs branchid={auth.user.branchid} />
                <AccountProfile id={auth.user.id} />
                <BranchAccountTabs
                    branch={auth.user.branchid}
                    id={auth.user.id}
                />
                <div className="m-2 ">
                    <button
                        class={`${
                            find == "production" ? "bg-red-500 text-white" : ""
                        } mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`}
                        onClick={() => setFind("production")}
                    >
                        Production History
                    </button>
                    <button
                        class={`${
                            find == "selecta" ? "bg-red-500 text-white" : ""
                        } hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`}
                        onClick={() => setFind("selecta")}
                    >
                        Selecta History
                    </button>
                </div>
                {loading ? (
                    <SkeletonLoader />
                ) : find == "production" ? (
                    <BranchAccountHistory data={data} />
                ) : (
                    <AccountHistory2 data={data} />
                )}
            </div>
        </BranchLayout>
    );
}
