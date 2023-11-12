import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import StoreIcon from "@/icons/store-icon";
import { get_all_branches } from "@/services/branches-services";
import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
export default function SidebarBranches() {
    const { branches } = useSelector((state) => state.app);
    const { url } = usePage();
    const branchid = url.split("/")[2];
    const path = url.split("/")[3];

   

    return (
        <div>
            <div className="h-screen py-8 overflow-y-auto bg-white border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
                <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">
                    Branches
                </h2>

                {branches?.map((res, index) => (
                    <Disclosure
                        defaultOpen={branchid == res.id}
                        as="div"
                        key={index}
                        className="border-b border-gray-200"
                    >
                        {({ open }) => (
                            <>
                                <h3 className="flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                                        <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                                            <div className="text-red-500">
                                                <StoreIcon />
                                            </div>

                                            <div className="text-left rtl:text-right">
                                                <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                                                    {res.branch_name}
                                                </h1>

                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    11.2 Followers
                                                </p>
                                            </div>
                                        </button>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel>
                                    <div className="space-y-2 p-2">

                                    <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "analytics"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_analytics",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}ANALYTICS
                                                </span>
                                            </div>
                                        </Link>
                                        <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "raw_materials"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_raw_materials",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}RAW MATERIALS
                                                </span>
                                            </div>
                                        </Link>
                                        <Link
                                            className={`${
                                                (branchid == res.id &&
                                                    path ==
                                                        "bakers_production") ||
                                                (branchid == res.id &&
                                                    path == "bakers_report") ||
                                                (branchid == res.id &&
                                                    path == "bread_report") ||
                                                (branchid == res.id &&
                                                    path == "sales_report")||
                                                    (branchid == res.id &&
                                                        path == "history")
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_bakers_production",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}PRODUCTION
                                                </span>
                                            </div>
                                        </Link>
                                        <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "selecta"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_selecta",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}SELECTA
                                                </span>
                                            </div>
                                        </Link>
                                        <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "expenses"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_expenses",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}EXPENSES
                                                </span>
                                            </div>
                                        </Link>
                                        
                                        <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "accounts"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_accounts",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}ACCOUNTS
                                                </span>
                                            </div>
                                        </Link>

                                        <Link
                                            className={`${
                                                branchid == res.id &&
                                                path == "attendance"
                                                    ? "bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                                    : "bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"
                                            }`}
                                            href={route(
                                                "branch_attendance",
                                                res.id
                                            )}
                                        >
                                            <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                                {/* {icon} */}
                                                <span className="text-sm ml-2">
                                                    {/* {title} */}ATTENDANCE
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
}
