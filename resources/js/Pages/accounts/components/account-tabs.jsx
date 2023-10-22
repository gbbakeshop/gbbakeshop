import AccountIcon from "@/icons/account-icons";
import { Link, usePage } from "@inertiajs/react";
import DatabaseIcon from "@/icons/database-icon";
export default function AccountTabs() {
    const { url } = usePage();
    const pathname = url.split("/")[3];
    return (
        <div className="border-b border-gray-300 dark:border-red-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <Link
                        href={route("accounts")}
                        className={
                            pathname == "accounts"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                        }
                    >
                        <AccountIcon />
                        <div className="ml-3">ACCOUNTS</div>
                    </Link>
                </li>
                <li className="mr-2">
                    <Link
                        href={route("registration")}
                        className={
                            pathname == "registration"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                        }
                        aria-current="page"
                    >
                       <DatabaseIcon />
                        <div className="ml-3">REGISTRATION</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
