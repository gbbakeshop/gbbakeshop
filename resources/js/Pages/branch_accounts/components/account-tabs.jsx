import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function AccountTabs() {
    const { url } = usePage();
    const path = url.split("/")[5];
    const branchid = url.split("/")[2];
    const userid = url.split("/")[4];
    console.log('path',path)
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            <li className="mr-2">
                    <Link
                        href={route("account_settings", {
                            branchid: branchid, // Replace with the appropriate branch ID source
                            userid: userid,
                        })}
                        className={
                            path == "settings"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                        }
                    >
                        <svg
                            className={
                                path == "settings"
                                    ? "w-4 h-4 mr-2 text-red-600 dark:text-red-500"
                                    : "w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500  dark:group-hover:text-gray-300"
                            }
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                        </svg>
                        Settings
                    </Link>
                </li>
                <li className="mr-2">
                    <Link
                        href={route("account_expenses", {
                            branchid: branchid, // Replace with the appropriate branch ID source
                            userid: userid,
                        })}
                        className={
                            path == "expenses"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                        }
                        aria-current="page"
                    >
                        <svg
                            className={
                                path == "expenses"
                                    ? "w-4 h-4 mr-2 text-red-600 dark:text-red-500"
                                    : "w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500  dark:group-hover:text-gray-300"
                            }
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        Charges / Credits
                    </Link>
                </li>
               
                <li className="mr-2">
                    <Link
                        href={route("account_history", {
                            branchid: branchid, // Replace with the appropriate branch ID source
                            userid: userid,
                        })}
                        className={
                            path == "history"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                        }
                    >
                        <svg
                            className={
                                path == "history"
                                    ? "w-4 h-4 mr-2 text-red-600 dark:text-red-500"
                                    : "w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500  dark:group-hover:text-gray-300"
                            }
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                        >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                        History Logs
                    </Link>
                </li>

                <li className="mr-2">
                    <Link
                        href={route("account_attendance", {
                            branchid: branchid, // Replace with the appropriate branch ID source
                            userid: userid,
                        })}
                        className={
                            path == "attendance"
                                ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                        }
                    >
                        <svg
                            className={
                                path == "attendance"
                                    ? "w-4 h-4 mr-2 text-red-600 dark:text-red-500"
                                    : "w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500  dark:group-hover:text-gray-300"
                            }
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                        >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                        Attendance
                    </Link>
                </li>
            </ul>
        </div>
    );
}
