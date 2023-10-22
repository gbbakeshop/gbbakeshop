import AccountIcon from "@/icons/account-icons";
import BreadIcon from "@/icons/bread-icon";
import ListIcon from "@/icons/list-icon";
import StackIcon from "@/icons/stack-icon";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
export default function SidebarControls() {
    const { url } = usePage();
    const location = url.split("/")[3];
    return (
        <div>
            <div className="h-screen py-8 overflow-y-auto bg-white border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
                <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">
                    Controls
                </h2>

                <div className="mt-8">
                    <Link
                        href={route("breads")}
                        className={`${
                            location == "breads"
                                ? "flex text-red-600 items-center w-full px-5 py-2 transition-colors duration-200 bg-red-100 dark:bg-gray-800 gap-x-2 focus:outline-none"
                                : "flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
                        }`}
                    >
                        <BreadIcon />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                                Breads
                            </h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                11.2 Followers
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={route("recipes")}
                        className={`${
                            location == "recipes" ||
                            location == "raw_materials" ||
                            location == "ingredients"
                                ? "flex text-red-600 items-center w-full px-5 py-2 transition-colors duration-200 bg-red-100 dark:bg-gray-800 gap-x-2 focus:outline-none"
                                : "flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
                        }`}
                    >
                        <ListIcon />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                                Recipes
                            </h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                1.2 Followers
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={route("selecta")}
                        className={`${
                            location == "selecta"
                                ? "flex text-red-600 items-center w-full px-5 py-2 transition-colors duration-200 bg-red-100 dark:bg-gray-800 gap-x-2 focus:outline-none"
                                : "flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
                        }`}
                    >
                        <StackIcon />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                                Selecta
                            </h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                15.6 Followers
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={route("accounts")}
                        className={`${
                            location == "accounts" ||
                            location == "registration"
                                ? "flex text-red-600 items-center w-full px-5 py-2 transition-colors duration-200 bg-red-100 dark:bg-gray-800 gap-x-2 focus:outline-none"
                                : "flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
                        }`}
                    >
                        <AccountIcon />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                                Accounts
                            </h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                32.9 Followers
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
