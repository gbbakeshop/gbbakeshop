import { Link, usePage } from "@inertiajs/react";
export default function SelectaTabs({ branchid }) {
    const { url } = usePage();
    const pathname = url.split("/")[2];
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <Link
                        href={route("b_selecta")}
                        className={
                            pathname == 'selecta'
                                ? "inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500"
                                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }
                    >
                        SELECTA
                    </Link>
                </li>
                <li className="mr-2">
                    <Link
                        href={route("b_selecta_records")}
                        className={
                            pathname == "selecta_records"
                                ? "inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500"
                                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }
                        aria-current="page"
                    >
                        RECORDS
                    </Link>
                </li>
                <li className="mr-2">
                    <Link
                        href={route("b_selecta_history")}
                        className={
                            pathname == "selecta_history"
                                ? "inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500"
                                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }
                        aria-current="page"
                    >
                        HISTORY LOGS
                    </Link>
                </li>
            </ul>
        </div>
    );
}
// branch_selecta_records
