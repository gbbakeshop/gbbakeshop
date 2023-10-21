import { useState } from "react";
import moment from "moment/moment";
import { FaEdit } from "react-icons/fa";
import Drawer from "@/_components/drawer";
import BreadCreateForm from "./bread-create-form";
import BreadEditForm from "./bread-edit-form";
import ActionDrawer from "@/_components/action-drawer";
import BreadDelete from "./bread-delete";
import { create_recipes } from "@/services/recipes-services";
import { useDispatch } from "react-redux";
import { isSetResponse } from "@/_redux/app-slice";
import PencilIcon from "@/icons/pencil-icon";
import LoadingIcon from "@/_icons/loading-icon";
import TrashIcon from "@/icons/trash-icon";

export default function BreadTableComponent({ data }) {
    const [selected, setSelected] = useState([]);
    const [breadName, setBreadName] = useState([]);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();

    function isExistFunction(res) {
        //check if exist
        return selected.find((result) => result === res);
    }

    function addItem(res, bread_name) {
        const isExist = isExistFunction(res);
        if (isExist == undefined) {
            // insert array of object
            setSelected([...selected, res]);
            setBreadName([...breadName, bread_name]);
        } else {
            // delete array of object
            const newselected = selected.filter((item) => item !== res);
            const newselected2 = breadName.filter(
                (item) => item !== bread_name
            );
            setSelected(newselected);
            setBreadName(newselected2);
        }
    }

    async function clickCreateRecipe() {
        setLoad(true);

        const data = selected.map((res, index) => ({
            bread_id: res,
            bread_name: breadName[index],
        }));

        const create = await create_recipes({
            data: data,
        });

        dispatch(isSetResponse(create));
        setTimeout(() => {
            dispatch(isSetResponse([]));
            setLoad(false);
            setSelected([]);
            setBreadName([]);
        }, 1000);
    }

    const column = [
        { title: "Name of Bread" },
        { title: "Price" },
        { title: "Created At" },
        { title: "Actions" },
    ];
    return (
        <div>
            <div className="flex flex-row w-full">
                <div className="flex-1">
                    {selected.length !== 0 && (
                        <>
                            {load ? (
                                <button
                                    disabled
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <LoadingIcon />
                                </button>
                            ) : (
                                <button
                                    onClick={clickCreateRecipe}
                                    className="border-2 border-red-500 hover:border-red-600 text-red-500 font-bold py-2 px-4 rounded"
                                >
                                    CREATE RECIPES
                                </button>
                            )}
                        </>
                    )}
                </div>
                <div className="flex-none">
                    <BreadCreateForm />
                </div>
            </div>

            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className=" text-gray-600 uppercase text-sm leading-normal">
                        {column.map((res, index) => (
                            <th key={index} className="py-3 px-6 text-left">
                                {res.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            }  border-gray-200 hover:bg-gray-100`}
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <input
                                            checked={
                                                isExistFunction(res.id) !==
                                                undefined
                                            }
                                            onChange={() =>
                                                addItem(res.id, res.bread_name)
                                            }
                                            type="checkbox"
                                            className={`${
                                                isExistFunction(res.id) ==
                                                undefined
                                                    ? ""
                                                    : "border-red-500 border bg-red-500 text-red-500"
                                            }  form-checkbox `}
                                        />
                                    </div>
                                    <span className="font-medium">
                                        {res.bread_name}
                                    </span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                    {res.price}
                                </span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                {moment(res.created_at).format("LLLL")}
                            </td>

                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    {/* <div className="w-4 mr-2 transform ">
                                        <ViewIcon />
                                    </div> */}
                                    <div className="w-4 mr-6 text-blue-500">
                                        <BreadEditForm data={res} />
                                        {/* <ActionDrawer
                                            content={
                                                <BreadEditForm data={res} />
                                            }
                                            title="Edit Form"
                                            icons={<PencilIcon />}
                                        /> */}
                                    </div>
                                    <div className="w-4 mr-2 transform text-red-500">
                                        <BreadDelete
                                            data={res}
                                            icons={<TrashIcon />}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
