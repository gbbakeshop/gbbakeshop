import { LuChefHat } from "react-icons/lu";
import { SiCodechef } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import ClockIcon from "@/icons/clock-icon";

export default function BranchBakersProductionTabsComponent() {
    const { url } = usePage();
    const page = url.split("/")[3];
    const branchid = url.split("/")[2];

    return (
        <>
            <div className="font-extrabold border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-600 dark:text-gray-600">
                    <li className="mr-2">
                        <Link
                            href={route("branch_bakers_production", [branchid])}
                            className={`${
                                page == "bakers_production"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <SiCodechef className="text-2xl" />
                            Bakers Production
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("branch_bakers_report", [branchid])}
                            className={`${
                                page == "bakers_report"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <LuChefHat className="text-2xl" />
                            Bakers Report
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("branch_bread_report", [branchid])}
                            className={`${
                                page == "bread_report"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <GiSlicedBread className="text-2xl" />
                            Bread Report
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("branch_sales_report", [branchid])}
                            className={`${
                                page == "sales_report"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <TbReportSearch className="text-2xl" />
                            Sales Report
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("branch_history", [branchid])}
                            className={`${
                                page == "history"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <ClockIcon />
                            History Logs
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
