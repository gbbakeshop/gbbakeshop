import { AiFillReconciliation } from "react-icons/ai";
import { GiSlicedBread } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function RecipesTabsComponent() {
    const { url } = usePage();
    const page = url.split("/")[3];
    const branchid = url.split("/")[2];

    return (
        <>
            <div className="font-extrabold border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-600 dark:text-gray-600">
                   
                    <li className="mr-2">
                        <Link
                            href={route("recipes")}
                            className={`${
                                page == "recipes"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <GiSlicedBread className="text-2xl" />
                            Recipes
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("raw_materials")}
                            className={`${
                                page == "raw_materials"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <AiFillReconciliation className="text-2xl" />
                            Raw Materials
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("ingredients")}
                            className={`${
                                page == "ingredients"
                                    ? "inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500 group"
                                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-800 hover:border-gray-600 dark:hover:text-gray-600 group"
                            }`}
                        >
                            <TbReportSearch className="text-2xl" />
                            Ingredients
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
