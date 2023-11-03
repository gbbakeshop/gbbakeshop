import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import PencilIcon from "@/icons/pencil-icon";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import TrashIcon from "@/icons/trash-icon";
import Input from "@/_components/input";
import SelectOption from "@/_components/select-option";
import { get_all_raw_materials } from "@/services/raw-materials-services";
import { useState, useEffect, useRef, Fragment } from "react";
import {
    update_ingredients,
    delete_selected_ingredients,
} from "@/services/ingredients-services";
import { useDispatch } from "react-redux";
import {
    isResponseHandler,
    isRandomhandler,
    isResetForm,
    isSetResponse,
} from "@/_redux/app-slice";
import Swal from "sweetalert2";
export default function IngredientsEdit({ data }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [rawMaterials, setRawMaterials] = useState([]);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        get_all_raw_materials().then((res) => {
            setRawMaterials(res);
        });
    }, []);
    function loading() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    const newData = data.selected_ingredients.map((result) => result.id);

    async function submitHandler(e) {
        e.preventDefault();
        setLoad(true);
        dispatch(isSetResponse(loading()));
        const formData = new FormData(ref.current);

        const ingredients = newData.map((res, index) => ({
            raw_materials: formData.get(`raw_materials_${index}`),
            quantity: formData.get(`quantity_${index}`),
        }));
        const data = {
            id: formData.get("id"),
            code: formData.get("code"),
            target: formData.get("target"),
            ingredients: ingredients,
        };
        setTimeout(async () => {
            const create = await update_ingredients(data);
            dispatch(isSetResponse(create));
            setOpen(false);
            setTimeout(() => {
                setLoad(false);
                dispatch(isResetForm(false));
                dispatch(isRandomhandler());
                dispatch(isSetResponse([]));
            }, 2000);
        }, 1000);
    }

    function deleteData(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_selected_ingredients(id).then((res) => {
                    if (res.status == "success") {
                        dispatch(isRandomhandler());
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Invalid",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            }
        });
    }
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="mr-6 text-blue-500"
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
                                                    EDIT INGREDIENTS
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
                                                            data={data.id}
                                                            name="id"
                                                            title="id"
                                                            placeholder="Enter new code"
                                                            type="hidden"
                                                        />
                                                        <Input
                                                            data={data.code}
                                                            name="code"
                                                            title="Code"
                                                            placeholder="Enter new code"
                                                            type="number"
                                                        />
                                                        <Input
                                                            data={data.target}
                                                            name="target"
                                                            title="Target Pieces"
                                                            placeholder="Enter target pieces"
                                                            type="number"
                                                        />
                                                        <div className="flex flex-row gap-2">
                                                            <div className="flex-1">
                                                                Raw Materials
                                                            </div>
                                                            <div className="flex-1">
                                                                Grams
                                                            </div>
                                                        </div>
                                                        {data.selected_ingredients.map(
                                                            (result, index) => (
                                                                <div
                                                                    key={index}
                                                                >
                                                                    <div className="flex flex-row gap-2">
                                                                        <SelectOption
                                                                            name={`raw_materials_${index}`}
                                                                            list={
                                                                                rawMaterials
                                                                            }
                                                                            data={
                                                                                result.raw_materials
                                                                            }
                                                                            id={
                                                                                result.raw_materials_id
                                                                            }
                                                                        />
                                                                        <Input
                                                                            data={
                                                                                result.quantity
                                                                            }
                                                                            name={`quantity_${index}`}
                                                                            title=""
                                                                            placeholder="Grams"
                                                                            type="number"
                                                                        />
                                                                        <button
                                                                            onClick={() =>
                                                                                deleteData(
                                                                                    result.id
                                                                                )
                                                                            }
                                                                            type="button"
                                                                            className=" mt-2 relative flex rounded-full text-sm text-red-600"
                                                                        >
                                                                            <TrashIcon />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
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
                                                            UPDATE
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
