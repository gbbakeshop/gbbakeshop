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
export default function SidebarCategories() {
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
                href={route("dashboard")}
                className={`${
                    location == "dashboard"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <HomeIcon />
            </Link>
            <Link
                href={route("breads")}
                className={`${
                    location == "controls"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <SquireIcon />
            </Link>
            <Link
                href={route("branches")}
                className={`${
                    location == undefined ||
                    (location2 == "bakers_production" &&
                        location !== "controls") ||
                    (location2 == "bakers_report" && location !== "controls") ||
                    (location2 == "bread_report" && location !== "controls") ||
                    (location2 == "sales_report" && location !== "controls") ||
                    (location2 == "raw_materials" && location !== "controls") ||
                    (location2 == "selecta" && location !== "controls") ||
                    location2 == "accounts" && location !== "controls" ||
                    location2 == "expenses" && location !== "controls"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <StoreIcon />
            </Link>
            {/* <Link
                href={route("chats")}
                className={`${
                    location == "chats"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <div className="relative">
                    <ChatsIcon />
                    <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
                </div>
            </Link>
            <Link className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                <PieChartIcon />
            </Link>

            <Link className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                <BellIcon />
            </Link> */}

            <Link
                href={route("profile.edit")}
                className={`${
                    location == "settings"
                        ? "p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800"
                        : "p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                } `}
            >
                <SettingsIcon />
            </Link>

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
