import { useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import MoveIcon from "@/icons/move-icon";
import CheckIcon from "@/icons/check-icon";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import StoreIcon from "@/icons/store-icon";
import UserCircleIcon from "@/icons/user-circle-icon";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { register_account } from "@/services/account-services";
import { isSetResponse } from "@/_redux/app-slice";
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

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function RegisterAccountForm() {
    const { branches } = useSelector((state) => state.app);
    const [selected, setSelected] = useState({});
    const [branch, setBranch] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("");
    const dispatch = useDispatch();
    const ref = useRef();
    const [data, setData] = useState({
        name: "",
        position: "",
        branch: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData({
            ...data,
            branch: branch.id,
            position: selected.name,
            [name]: value,
        });
    };

    function branchHandler(event) {
        setBranch(event);
        setData({
            ...data,
            branch: event.id,
        });
    }

    function positionHandler(event) {
        setSelected(event);
        setData({
            ...data,
            position: event.name,
        });
    }
    function loadingHandler() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(isSetResponse(loadingHandler()));
        setLoading(true);
        register_account(data)
            .catch((res) => {
                setTimeout(() => {
                    setLoading(false);
                    console.log({
                        status: "error",
                        message: res.response.data.message,
                    });
                    dispatch(
                        isSetResponse({
                            status: "error",
                            message: res.response.data.message,
                        })
                    );
                    setErrors(res.response.data.message);
                }, 1000);
            })
            .then((res) => {
                if (res !== undefined) {
                    ref.current.reset();
                    dispatch(isSetResponse(res));
                    setErrors("");
                    setData({
                        name: "",
                        position: "",
                        branch: "",
                        email: "",
                        password: "",
                        password_confirmation: "",
                    });
                    setSelected({})
                    setBranch({})
                }
                setLoading(false);
            });
    };
    return (
        <form onSubmit={submit} name="form" ref={ref}>
            <InputError message={errors} className="mt-2" />
            <div className="w-full flex flex-row gap-6">
                <div className="flex-1">
                    <div className="text-lg font-medium">
                        Personal Information
                    </div>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data?.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    <div className="mt-2">
                        <Listbox value={branch} onChange={branchHandler}>
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                        Branches
                                    </Listbox.Label>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6">
                                            <span className="flex items-center">
                                                <StoreIcon />
                                                <span className="ml-3 block truncate">
                                                    {branch.branch_name}
                                                </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <MoveIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {branches.map((res) => (
                                                    <Listbox.Option
                                                        key={res.id}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            classNames(
                                                                active
                                                                    ? "bg-red-600 text-white"
                                                                    : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                                            )
                                                        }
                                                        value={res}
                                                    >
                                                        {({
                                                            branch,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                    <StoreIcon />
                                                                    <span
                                                                        className={classNames(
                                                                            branch
                                                                                ? "font-semibold"
                                                                                : "font-normal",
                                                                            "ml-3 block truncate"
                                                                        )}
                                                                    >
                                                                        {
                                                                            res.branch_name
                                                                        }
                                                                    </span>
                                                                </div>

                                                                {branch ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? "text-white"
                                                                                : "text-red-600",
                                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                        )}
                                                                    >
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>

                    <div className="mt-2">
                        <Listbox value={selected} onChange={positionHandler}>
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                        Assigned to
                                    </Listbox.Label>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6">
                                            <span className="flex items-center">
                                                <UserCircleIcon />
                                                <span className="ml-3 block truncate">
                                                    {selected.name}
                                                </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <MoveIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {position.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            classNames(
                                                                active
                                                                    ? "bg-red-600 text-white"
                                                                    : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                                            )
                                                        }
                                                        value={person}
                                                    >
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                    <UserCircleIcon />
                                                                    <span
                                                                        className={classNames(
                                                                            selected
                                                                                ? "font-semibold"
                                                                                : "font-normal",
                                                                            "ml-3 block truncate"
                                                                        )}
                                                                    >
                                                                        {
                                                                            person.name
                                                                        }
                                                                    </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? "text-white"
                                                                                : "text-red-600",
                                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                        )}
                                                                    >
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-lg font-medium">Credentials</div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data?.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data?.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data?.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-12">
                <PrimaryButton className="ml-4" disabled={loading}>
                    Register
                </PrimaryButton>
            </div>
        </form>
    );
}
