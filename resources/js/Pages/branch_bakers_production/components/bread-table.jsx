import { useState } from "react";
import { BiSolidLayerPlus } from "react-icons/bi";
import ActionDrawer from "@/_components/action-drawer";
import CreateProductionForm from "./create-production-form";
import { AiFillWarning } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import CreateIcon from "@/_icons/create-icon";

export default function BranchBreadProductionTableComponent({
    data,
    branchid,
    account,
    data2,
}) {
    const [selected, setSelected] = useState([]);
    function isExistFunction(res) {
        //check if exist
        return selected.find((result) => result === res);
    }

    function addItem(res) {
        const isExist = isExistFunction(res);
        if (isExist == undefined) {
            // insert array of object
            setSelected([...selected, res]);
        } else {
            // delete array of object
            const newselected = selected.filter((item) => item !== res);
            setSelected(newselected);
        }
    }
    const column = [
        { title: "Name of Breads" },
        { title: "Target" },
        { title: "Warning" },
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
                                                    className="flex-auto  text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                                >
                                                    {res?.bread_name}
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
                                {res?.selected_ingredients.length === 0 ? (
                                    <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        No Ingredients
                                    </span>
                                ) : (
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                        Good
                                    </span>
                                )}
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    <CreateProductionForm
                                        branchid={branchid}
                                        account={account}
                                        data={res}
                                        data2={data2}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
