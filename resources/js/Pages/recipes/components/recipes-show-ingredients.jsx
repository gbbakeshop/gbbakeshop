import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import EyesIcon from "@/icons/eyes-icon";

export default function RecipeShowIngredients({ data }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="text-green-500 " onClick={() => setOpen(true)}>
                <EyesIcon />
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
                                                        BREAD LIST
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
                                                    Panel title
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div>
                                                    <div className="grid grid-rows-6 grid-flow-col gap-1">
                                                        {data?.selected_breads.map(
                                                            (data, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                                >
                                                                    {
                                                                        data.bread_name
                                                                    }
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="grid grid-rows-1 grid-flow-col gap-1 text-lg font-semibold">
                                                        RECIPES
                                                    </div>
                                                    {data?.selected_ingredients
                                                        .length == 0 ? (
                                                        <h5 className=" text-base font-semibold text-red-500 dark:text-red-400">
                                                            No Ingredients
                                                            designated!
                                                        </h5>
                                                    ) : (
                                                        <div className="grid grid-rows-6 grid-flow-col gap-1">
                                                            {data?.selected_ingredients.map(
                                                                (
                                                                    data,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                                    >
                                                                        {
                                                                            data.raw_materials
                                                                        }{" "}
                                                                        - (
                                                                        {
                                                                            data.quantity
                                                                        }
                                                                        gm)
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
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
