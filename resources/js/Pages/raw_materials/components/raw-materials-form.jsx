import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import Input from "@/_components/input";
import { create_ingredients } from "@/services/ingredients-services";
import { isRandomhandler, isSetResponse } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";

export default function RawMaterialsForm({ selected, data }) {
    const [open, setOpen] = useState(false);

    const ref = useRef();
    const [load, setLoad] = useState(false);
    const newData = data.filter((res) => selected.includes(res.id));
    function loading() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    const dispatch = useDispatch();
    function submitHandler(e) {
        e.preventDefault();
        setLoad(true); // Set loading state
        dispatch(isSetResponse(loading()));
        const formData = new FormData(ref.current);

        const ingredients = newData.map((res, index) => ({
            raw_materials: newData[index],
            quantity: formData.get(`quantity_${index}`),
        }));
        const data = {
            code: formData.get("code"),
            target: formData.get("target"),
            ingredients: ingredients,
        };

        setTimeout(async () => {
            const create = await create_ingredients(data);
            dispatch(isSetResponse(create));
            if (create.status == "success") {
                setOpen(false)
                ref.current.reset();
            }
            setTimeout(() => {
                setLoad(false);
                dispatch(isRandomhandler());
                dispatch(isSetResponse([]));
            }, 2000);
        }, 1000);
    }
    return (
        <>
            <button
                className="flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => setOpen(true)}
            >
                CREATE INGREDIENTS
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
                                                    CREATE INGREDIENTS
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <form
                                                    name="form"
                                                    ref={ref}
                                                    onSubmit={submitHandler}
                                                    className="flex flex-col h-full w-full"
                                                >
                                                    <Input
                                                        name="code"
                                                        title="Ingredients Code"
                                                        placeholder="Enter ingredients code"
                                                        type="text"
                                                    />
                                                    <Input
                                                        name="target"
                                                        title="Target Pieces"
                                                        placeholder="Enter target pieces"
                                                        type="number"
                                                    />
                                                    <div className="flex-1">
                                                        {newData.map(
                                                            (res, index) => (
                                                                <div
                                                                    className="flex-none"
                                                                    key={index}
                                                                >
                                                                    <Input
                                                                       
                                                                        name={`quantity_${index}`} // Use unique names for each quantity input
                                                                        title={
                                                                            res.raw_materials
                                                                        }
                                                                        placeholder="Enter Grams"
                                                                        type="number"
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="flex-none">
                                                        {load ? (
                                                            <button
                                                                disabled
                                                                className="flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                                                            >
                                                                <center>
                                                                    Loading...
                                                                    <div className="spinner"></div>
                                                                </center>
                                                            </button>
                                                        ) : (
                                                            <button className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                                                                SUBMIT
                                                            </button>
                                                        )}
                                                    </div>
                                                    <br />
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
