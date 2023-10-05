import { useState } from "react";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";
import { MdCreateNewFolder } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";

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
                            Name of Bread
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
                                            className="flex-auto ml-4 text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                        >
                                            {res.bread_name}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                {res?.selected_ingredients.length === 0 ? (
                                    <AiFillWarning className="text-4xl text-red-600" />
                                ) : (
                                    <BsFillClipboardCheckFill className="text-4xl text-green-600" />
                                )}
                            </td>
                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                {res.raw_materials == null ? (
                                    <ActionDrawer
                                        data={res}
                                        content={
                                            <div>
                                                <div className="grid grid-rows-6 grid-flow-col gap-1">
                                                    {res?.selected_breads.map(
                                                        (res, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex-none ml-4 text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                            >
                                                                {res.bread_name}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="grid grid-rows-6 grid-flow-col gap-1 text-lg font-semibold">
                                                    Raw Materials
                                                </div>
                                                {res?.selected_ingredients
                                                    .length == 0 ? (
                                                    <h5 className=" text-base font-semibold text-red-500 dark:text-red-400">
                                                        No Ingredients
                                                        designated!
                                                    </h5>
                                                ) : (
                                                    <div className="grid grid-rows-6 grid-flow-col gap-1">
                                                        {res?.selected_ingredients.map(
                                                            (res, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex-none ml-4 text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                                >
                                                                    {
                                                                        res.raw_materials
                                                                    }
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        }
                                        title={"BREAD LIST "}
                                        icons={
                                            <MdCreateNewFolder className="text-4xl text-blue-600" />
                                        }
                                    />
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
