import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import Input from "@/_components/input";
import LoadingIcon from "@/icons/loading-icon";
import { useDispatch } from "react-redux";
import { isRandomhandler, isSetResponse } from "@/_redux/app-slice";
import {  update_selecta } from "@/services/selecta-services";
import PencilIcon from "@/icons/pencil-icon";

export default function UpdateSelectaForm({data}) {
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    // const { isReset } = useSelector((state) => state.app);

    // useEffect(() => {
    //     if (!isReset) {
    //         ref?.current?.reset();
    //     }
    // }, [isReset]);

    function loading() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    function submitHandler(e) {
        e.preventDefault();
        setLoad(true);
        const formData = new FormData(ref.current);
        dispatch(isSetResponse(loading()));
        const datas = {
            id:data.id,
            product_name: formData.get("product_name").toUpperCase(),
            price: formData.get("price"),
        };
        update_selecta(datas).then((res) => {
            dispatch(isSetResponse(res));
            setOpen(false);
            setTimeout(() => {
                setLoad(false);
                dispatch(isRandomhandler());
                dispatch(isSetResponse([]));
            }, 2000);
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
                                                    EDIT SELECTA
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
                                                            type="text"
                                                            name="product_name"
                                                            data={
                                                                data.product_name
                                                            }
                                                            title={
                                                                "Product Name"
                                                            }
                                                            placeholder="Enter name of product"
                                                        />
                                                        <Input
                                                            type="number"
                                                            name="price"
                                                            data={
                                                                data.price
                                                            }
                                                            title={"Price"}
                                                            placeholder="Enter product price"
                                                        />
                                                    </div>
                                                    <div className="flex-none">
                                                        {load ? (
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
