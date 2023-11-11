import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PencilIcon from "@/icons/pencil-icon";
import { update_selecta_quantity_record } from "@/services/selecta-services";
import { isRandomhandler, isSetResponse } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";
import LoadingIcon from "@/icons/loading-icon";
import XMarkIcon from "@/icons/x-mark-icon";
import Input from "@/_components/input";
import moment from "moment";

export default function BranchSelectaEditRecord({ data,userid }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const cancelButtonRef = useRef(null);
    const ref = useRef()

    function loadingState() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    function submitHandler(e) {
        e.preventDefault()
        dispatch(isSetResponse(loadingState()));
        setLoading(true);
        const formData = new FormData(ref.current);
        
        const newData = {
            id:data.id,
            userid:userid,
            product_name:data.selecta.product_name,
            quantity: formData.get("quantity"),
            sales: formData.get("quantity") * data.price,
            date:moment().format('L')
        };
        update_selecta_quantity_record(newData).then((res) => {
            setOpen(false);
            setLoading(false);
            dispatch(isRandomhandler());
            dispatch(isSetResponse(res));
        });

    }
    return (
        <>
            <button onClick={() => setOpen(true)}>
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                                    EDIT RECORDS
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
                                                            name="quantity"
                                                            data={data.quantity}
                                                            title={"quantity"+'- Price:(' +data.price+')'}
                                                            placeholder="Enter Quantity"
                                                            type="number"
                                                        />
                                                    </div>
                                                    <div className="flex-none">
                                                        {loading ? (
                                                            <button
                                                                disabled
                                                                className="flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                                                            >
                                                                <center>
                                                                <LoadingIcon />
                                                                </center>
                                                            </button>
                                                        ) : (
                                                            <button className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                                                                UPDATE
                                                            </button>
                                                        )}
                                                    </div>
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
