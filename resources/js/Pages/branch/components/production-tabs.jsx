import { LuChefHat } from "react-icons/lu";
import { SiCodechef } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import ClockIcon from "@/icons/clock-icon";

export default function ProductionTabsComponent({ branchid, position }) {
    const { url } = usePage();
    const page = url.split("/")[2];


    return (
        <>
            <div className="font-extrabold border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-600 dark:text-gray-600">
                    {position == "Chief Baker" ||
                        position == "Baker" ||
                        position == "Lamasador" ||
                        position == "Hornero"? (
                            <li className="mr-2">
                                <Link
                                    href={route("b_bread_production")}
                                    className={`${
                                        page == "bread-production"
                                            ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                            : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                                    }`}
                                >
                                    <SiCodechef className="text-2xl" />
                                    Bakers Production
                                </Link>
                            </li>
                        ):null}

                    <li className="mr-2">
                        <Link
                            href={route("b_bakers_report")}
                            className={`${
                                page == "bakers-report"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <LuChefHat className="text-2xl" />
                            Bakers Report
                        </Link>
                    </li>

                    {position == "Sales Lady" ||
                    position == "Cashier" ||
                    position == "Supervisor" ? (
                        <li className="mr-2">
                            <Link
                                href={route("b_bread_report")}
                                className={`${
                                    page == "bread-report"
                                        ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                                }`}
                            >
                                <GiSlicedBread className="text-2xl" />
                                Bread Report
                            </Link>
                        </li>
                    ) : null}

                    {position == "Sales Lady" ||
                    position == "Cashier" ||
                    position == "Supervisor" ? (
                        <li className="mr-2">
                            <Link
                                href={route("b_sales_report")}
                                className={`${
                                    page == "sales-report"
                                        ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                                }`}
                            >
                                <TbReportSearch className="text-2xl" />
                                Sales Report
                            </Link>
                        </li>
                    ) : null}

                    {position == "Sales Lady" ||
                    position == "Cashier" ||
                    position == "Supervisor" ? (
                        <li className="mr-2">
                            <Link
                                href={route("b_history")}
                                className={`${
                                    page == "history"
                                        ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                                }`}
                            >
                                <ClockIcon className="text-2xl" />
                                History Logs
                            </Link>
                        </li>
                    ) : null}
                </ul>
            </div>
        </>
    );
}
