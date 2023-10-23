import { useState } from "react";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";
import { AiFillWarning } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import RecipeAddIngredients from "./recipes-add-ingredients";
import RecipeShowIngredients from "./recipes-show-ingredients";
import RecipeChangeIngredients from "./recipes-change-ingredients";
import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";
import PencilIcon from "@/icons/pencil-icon";
import EyesIcon from "@/icons/eyes-icon";

export default function RecipesTableComponent({ data }) {
    const [selected, setSelected] = useState([]);

    function isExistFunction(res) {
        //check if exist
        return selected.find((result) => result.id === res);
    }

    function addItem(res) {
        const isExist = isExistFunction(res);
        if (isExist == undefined) {
            // insert array of object
            setSelected([
                ...selected,
                {
                    id: res,
                },
            ]);
        } else {
            // delete array of object
            const newselected = selected.filter((item) => item.id !== res);
            setSelected(newselected);
        }
    }

    const column = [
        { title: "Name of Bread" },
        { title: "Target" },
        { title: "Status" },
        { title: "Actions" },
    ];
    return (
        <div className=" my-6">
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
                            className="border-b border-red-200 hover:bg-red-100"
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="grid grid-rows-2 grid-flow-col gap-1">
                                        {res?.selected_breads.map(
                                            (res, index) => (
                                                <div
                                                    key={index}
                                                    className="flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                >
                                                    {res.bread_name}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    {res.target ?? 0}
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                    Baker
                                </span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    <div className="w-4 mr-6 ">
                                        {res.raw_materials == null ? (
                                            <RecipeShowIngredients data={res} />
                                        ) : (
                                            "YES RM"
                                        )}
                                    </div>
                                    <div className="w-4 mr-2  ">
                                    <RecipeAddIngredients
                                                    data={res}
                                                />
                                        {/* <ActionDrawer
                                            content={
                                                <RecipeAddIngredients
                                                    data={res}
                                                />
                                            }
                                            title="ADD INGREDIENTS"
                                            icons={
                                                <div className="text-blue-500 ">
                                                    <PencilIcon />
                                                </div>
                                            }
                                        /> */}
                                    </div>
                                    {/* <div className="w-4 mr-2 text-red-500 transform hover:text-red-500 hover:scale-110">
                                        <DeleteIcon />
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
