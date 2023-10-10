import { useDispatch, useSelector } from "react-redux";
import DropDownComponent from "./drop-down";
import { isSideBarHandler } from "@/_redux/app-slice";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export default function TopNavbar() {
    const dispatch = useDispatch();

    const { isSideBar } = useSelector((state) => state.app);
    function sideBarOpen() {
        dispatch(isSideBarHandler(!isSideBar));
    }

    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <button
                                onClick={sideBarOpen}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                {isSideBar ? (
                                    <AiOutlineMenuFold className="text-2xl text-red-500" />
                                ) : (
                                    <AiOutlineMenuUnfold className="text-2xl text-red-500" />
                                )}
                            </button>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center ">
                            <button
                                onClick={sideBarOpen}
                                className="relative  inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                {isSideBar ? (
                                    <AiOutlineMenuFold className="text-2xl text-red-500" />
                                ) : (
                                    <AiOutlineMenuUnfold className="text-2xl text-red-500" />
                                )}
                            </button>
                        </div>
                        {/* <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <a href="#" className="bg-red-600 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-800 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                    <a href="#" className="text-gray-800 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                    <a href="#" className="text-gray-800 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                </div>
                </div> */}
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <DropDownComponent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                        href="#"
                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:bg-red-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:bg-red-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:bg-red-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
}
