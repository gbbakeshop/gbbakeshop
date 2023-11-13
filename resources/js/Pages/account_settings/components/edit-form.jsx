import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
    update_personal_information,
    update_personal_credentials,
} from "@/services/account-services";
import { isSetResponse, isRandomhandler } from "@/_redux/app-slice";

export default function BranchSettingsEditForm({ data, positions }) {
    
    const { branches } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const ref1 = useRef();
    const ref2 = useRef();
    const position = [
        {
            id: 1,
            name: "Supervisor",
            icon: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 2,
            name: "Chief Baker",
            icon: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 3,
            name: "Baker",
            icon: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        },
        {
            id: 4,
            name: "Cashier",
            icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 5,
            name: "Sales Lady",
            icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 6,
            name: "Lamasador",
            icon: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 7,
            name: "Hornero",
            icon: "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ];

    function loading() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    function submitHandler1(e) {
        e.preventDefault();
        dispatch(isSetResponse(loading()));
        const formData = new FormData(ref1.current);
     
        const newData = {
            userid: data.id,
            name: formData.get("name"),
            branchid: formData.get("branchid"),
            position: formData.get("position"),
            address: formData.get("address"),
        };
        
        update_personal_information(newData).then((res) => {
            dispatch(isRandomhandler());
            dispatch(isSetResponse(res));
        });
    }

    function submitHandler2(e) {
        e.preventDefault();
        const formData = new FormData(ref2.current);
        const newData = {
            userid: data.id,
            email: formData.get("email"),
            password: formData.get("password"),
        };
        update_personal_credentials(newData).then((res) => {
            dispatch(isRandomhandler());
            dispatch(isSetResponse(res));
        });
    }
    return (
        <>
            <form onSubmit={submitHandler1} ref={ref1}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-6">
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </div>

                    <div className="border-b border-gray-900/10 ">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>

                        <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Fullname
                                </label>
                                <div className="mt-2">
                                    <input
                                        defaultValue={data.name}
                                        type="text"
                                        name="name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {positions == "admin" && (
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Branches
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="branches"
                                            name="branchid"
                                            autoComplete="branches-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            {branches.map((res, index) => (
                                                <option
                                                    key={index}
                                                    value={res.id}
                                                    selected={
                                                        res.branch_name ===
                                                        data.get_branch?.branch_name
                                                    }
                                                >
                                                    {res.branch_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {positions == "admin" && (
                                <div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="position"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Position
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="position"
                                                name="position"
                                                autoComplete="position-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                {position.map((res, index) => (
                                                    <option
                                                        key={index}
                                                        selected={
                                                            res.name ===
                                                            data.position
                                                        }
                                                        defaultValue={data.position}
                                                    >
                                                        {res.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="sm:col-span-4 mb-5">
                                <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Complete Address
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        defaultValue={data.address}
                                        type="text"
                                        name="address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

            <form onSubmit={submitHandler2} ref={ref2}>
                <div className="border-b border-gray-900/10 ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Credentials
                    </h2>

                    <div className="my-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    defaultValue={data.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
