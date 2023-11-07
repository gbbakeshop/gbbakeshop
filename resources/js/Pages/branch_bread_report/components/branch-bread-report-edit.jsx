import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import { useState, useRef } from "react";
import Input from "@/_components/input";
import { useDispatch } from "react-redux";
import { isSetResponse } from "@/_redux/app-slice";
import { isResetForm } from "@/_redux/app-slice";
import { isRandomhandler } from "@/_redux/app-slice";
import { edit_bread_report_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import PencilIcon from "@/icons/pencil-icon";
import moment from "moment";

export default function BranchBreadReportEdit({ data,account }) {
    const [open, setOpen] = useState(false);
    const { url } = usePage();
    const [load, setLoad] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const branchid = url.split("/")[2];

    function loading() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    async function submitHandler(e) {
        e.preventDefault();
        dispatch(isSetResponse(loading()));
        const formData = new FormData(ref.current);
        const newData = {
            id: data.id,
            userid:account.id,
            new_production: data.new_production,
            beginning: formData.get("beginning"),
            charge: formData.get("charge"),
            remarks: formData.get("remarks"),
            overs: formData.get("overs"),
            date: moment().format("L"),
        };

        const update = await edit_bread_report_records(newData);

        dispatch(isSetResponse(update));
        if (update.status == "success") {
            ref.current.reset();
            dispatch(isResetForm(false));
        }
        setOpen(false)
        setTimeout(() => {
            setLoad(false);
            dispatch(isRandomhandler());
            dispatch(isSetResponse({}));
        }, 2000);
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-blue-500 mr-6"
            >
                <PencilIcon />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XMarkIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    EDIT BREAD REPORT
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <form
                                                    name="form"
                                                    ref={ref}
                                                    onSubmit={submitHandler}
                                                    className="flex flex-col h-full w-full"
                                                >
                                                    <div className="flex-1">
                                                        <Input
                                                            data={
                                                                data.beginning ??
                                                                0
                                                            }
                                                            name="beginning"
                                                            title={"Beginning"}
                                                            placeholder="Enter beginning"
                                                            type="number"
                                                        />
                                                        {/* <Input
                                                            data={
                                                                data.new_production ??
                                                                0
                                                            }
                                                            name="new_production"
                                                            title={
                                                                "New Production"
                                                            }
                                                            placeholder="Enter new production"
                                                            type="number"
                                                        /> */}
                                                        <Input
                                                            data={
                                                                data.charge ?? 0
                                                            }
                                                            name="charge"
                                                            title={"Charge"}
                                                            placeholder="Enter charge"
                                                            type="number"
                                                        />
                                                        <Input
                                                            data={
                                                                data.overs ?? 0
                                                            }
                                                            name="overs"
                                                            title={"Over"}
                                                            placeholder="Enter over"
                                                            type="number"
                                                        />
                                                        <label
                                                            htmlFor="message"
                                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Your remarks
                                                        </label>
                                                        <textarea
                                                            name="remarks"
                                                            id="message"
                                                            rows="4"
                                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                                                            placeholder="Write your thoughts here..."
                                                        ></textarea>
                                                    </div>
                                                    {load ? (
                                                        <button
                                                            disabled
                                                            className="flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                                                        >
                                                            <center>
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                                                                    viewBox="0 0 100 101"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                        fill="currentFill"
                                                                    />
                                                                </svg>
                                                            </center>
                                                        </button>
                                                    ) : (
                                                        <button className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                                                            MOVE
                                                        </button>
                                                    )}
                                                </form>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
