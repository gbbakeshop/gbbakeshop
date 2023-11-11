import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PencilIcon from "@/icons/pencil-icon";
import { update_selecta_quantity } from "@/services/selecta-services";
import { isRandomhandler, isSetResponse } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";
import LoadingIcon from "@/icons/loading-icon";
import moment from "moment";

export default function BranchSelectaEditForm({ data,userid }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch()
    const cancelButtonRef = useRef(null);

    function loadingState() {
        return {
            status: "loading",
            message:'Loading...'
        };
    }

    function updateQuantityHandler(params) {
        dispatch(isSetResponse(loadingState()));
        setLoading(true)
        update_selecta_quantity({
            userid:userid,
            id:data.id,
            quantity:quantity,
            date:moment().format('L')
        })
        .then(res=>{
            setOpen(false)
            setLoading(false);
            dispatch(isRandomhandler());
            dispatch(isSetResponse(res));
        })
    }
    return (
        <>
            <button onClick={() => setOpen(true)}>
                <PencilIcon />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div>
                                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900"
                                                >
                                                    {data.product_name}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <div className="mt-2">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Edit Quantity
                                                        </label>
                                                        <input
                                                            step="any"
                                                            defaultValue={
                                                                data.quantity
                                                            }
                                                            required
                                                            onInput={(e) =>
                                                                setQuantity(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className={`${
                                                                quantity ==
                                                                    "" ||
                                                                quantity == null
                                                                    ? "border-red-500"
                                                                    : ""
                                                            } appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                                            type="number"
                                                            placeholder="Input quantity"
                                                        />
                                                        {quantity == "" || quantity == null || quantity == 0 && (
                                                            <p className="text-red-500 text-xs italic">
                                                                Please fill out
                                                                this field.
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            disabled={loading}
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => updateQuantityHandler(false)}
                                        >
                                             {loading? (
                                                <LoadingIcon />
                                            ) : (
                                                "Update"
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
