import React, { useState, useEffect } from "react";
import { isResetForm } from "@/_redux/app-slice";
import { useDispatch, useSelector } from "react-redux";

export default function ActionDrawer({ data, content, title, icons, width }) {
    const [open, setOpen] = useState(false);
    const { isReset } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isResetForm(open));
    }, [open]);
    useEffect(() => {
        if (!isReset) {
            setOpen(false);
        }
    }, [isReset]);

    return (
        <div>
            <div onClick={() => setOpen(!open)}>{icons}</div>
            {open && (
                <div
                    id="drawer-right-example"
                    className={`${open ? "flex flex-col" : "hidden"} ${
                        width ?? "w-96"
                    }  shadow-2xl fixed top-0 right-0 z-40 h-[100vh] p-4 overflow-y-auto transition-transform bg-white  dark:bg-gray-800`}
                >
                    <h5
                        id="drawer-right-label"
                        className=" mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                    >
                        {title}
                    </h5>
                    <button
                        onClick={() => setOpen(!open)}
                        type="button"
                        data-drawer-hide="drawer-right-example"
                        aria-controls="drawer-right-example"
                        className="border border-red-500 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            className="w-3 h-3 text-red-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                    {open && content}
                </div>
            )}
        </div>
    );
}
