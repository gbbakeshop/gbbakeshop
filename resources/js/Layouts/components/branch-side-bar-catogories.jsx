import React, { useState, useEffect } from "react";
import HomeIcon from "@/icons/home-icon";
import LogoutIcon from "@/icons/logout-icon";
import PieChartIcon from "@/icons/piechart-icon";
import BellIcon from "@/icons/bell-icon";
import SettingsIcon from "@/icons/settings-icon";
import StoreIcon from "@/icons/store-icon";
import ChatsIcon from "@/icons/chats-icons";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import SquireIcon from "@/icons/squire-icon";
import { get_all_branches } from "@/services/branches-services";
import { setBranches } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";
import CubeIcon from "@/icons/cube-icon";
import DatabaseIcon from "@/icons/database-icon";
import CalendarIcon from "@/icons/calendar-icon";
export default function BranchSidebarCategories({ position, branchid }) {
    const dispatch = useDispatch();
    const { url } = usePage();
    const location = url.split("/")[2];
    const location2 = url.split("/")[3];

    useEffect(() => {
        get_all_branches().then((res) => {
            dispatch(setBranches(res));
        });
    }, []);

    function logout(params) {
        axios
            .post("/logout")
            .then((res) => {
                navigate("/");
            })
            .catch((res) => {
                console.log("waa", res);
            });
    }
    const access =
        position == "Chief Baker" ||
        position == "Baker" ||
        position == "Lamasador" ||
        position == "Hornero"
            ? route("b_bread_production")
            : position == "Sales Lady" || position == "Cashier"
            ? route("b_bakers_report")
            : route("b_bread_production");
    return (
        <div className="flex  border-r flex-col items-center w-16 h-screen py-8 space-y-8 dark:bg-gray-900 dark:border-gray-700">
            {/* <Link>
                <img
                    className="w-auto h-6"
                    src="https://merakiui.com/images/logo.svg"
                    alt=""
                />
            </Link> */}

            <Link
                href={route("b_dashboard")}
                className={`${
                    location == "dashboard"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <StoreIcon />
            </Link>

            {position == "Supervisor" ||
            position == "Cashier" ||
            position == "admin" ? (
                <Link
                    href={route("b_expenses")}
                    className={`${
                        location == "expenses"
                            ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                            : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                    } `}
                >
                    <div className="relative">
                        <PieChartIcon />
                    </div>
                </Link>
            ) : null}

            <Link
                href={route("b_raw_materials")}
                className={`${
                    location == "raw-materials"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <SquireIcon />
            </Link>
            <Link
                href={access}
                className={`${
                    location == "bakers-production" ||
                    location == "bakers-report" ||
                    location == "bread-report" ||
                    location == "sales-report" ||
                    location == "bread-production" ||
                    location == "history" ||
                    location == "accounts"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <DatabaseIcon />
            </Link>
            <Link
                href={route("b_selecta")}
                className={`${
                    location == "selecta" ||
                    location == "selecta_records" ||
                    location == "selecta_history"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <CubeIcon />
            </Link>

            <Link
                href={route("b_settings")}
                className={`${
                    location == "settings" ||
                    location == "credits" ||
                    location == "logs"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <SettingsIcon />
            </Link>

            {position == "Supervisor" && (
                <Link
                    href={route("b_branch_attendance")}
                    className={`${
                        location == "branch_attendance"
                            ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                            : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                    } `}
                >
                    <CalendarIcon />
                </Link>
            )}

            <Link
                method="post"
                href={route("logout")}
                className={`${
                    location == "logout"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <LogoutIcon />
            </Link>
        </div>
    );
}
