import { useState } from "react";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";
import { AiFillWarning } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import RecipeAddIngredients from "./recipes-add-ingredients";
import RecipeShowIngredients from "./recipes-show-ingredients";
import RecipeChangeIngredients from "./recipes-change-ingredients";

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

    return (
        <div className="bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10">
            <table className="min-w-full">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Name of Breads
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Target
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Status
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Show
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-500  font-normal">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200"
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } my-1 flex flex-row  w-full  items-center justify-center`}
                        >
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                <div className="grid grid-rows-2 grid-flow-col gap-1">
                                    {res?.selected_breads.map((res, index) => (
                                        <div
                                            key={index}
                                            className="flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                        >
                                            {res.bread_name}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                <div className="bg-red-400 text-white p-1 rounded-xl">
                                    {res.target}
                                </div>
                            </td>
                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                {res?.selected_ingredients.length === 0 ? (
                                    <ActionDrawer
                                        content={
                                            <RecipeAddIngredients data={res} />
                                        }
                                        title="ADD INGREDIENTS"
                                        icons={
                                            <AiFillWarning className="text-4xl text-red-600" />
                                        }
                                    />
                                ) : (
                                    <ActionDrawer
                                        content={
                                            <RecipeChangeIngredients
                                                data={res}
                                            />
                                        }
                                        title="CHANGE INGREDIENTS"
                                        icons={
                                            <BsFillClipboardCheckFill className="text-2xl text-green-600" />
                                        }
                                    />
                                )}
                            </td>

                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                {res.raw_materials == null ? (
                                    <RecipeShowIngredients data={res} />
                                ) : (
                                    "YES RM"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
