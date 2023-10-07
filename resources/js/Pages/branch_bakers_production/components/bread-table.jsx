import { useState } from "react";
import { BiSolidLayerPlus } from "react-icons/bi";
import ActionDrawer from "@/_components/action-drawer";
import CreateProductionForm from "./create-production-form";
import { AiFillWarning } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";

export default function BranchBreadProductionTableComponent({ data }) {
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
console.log('waaa',data)
    return (
        <div className="bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10">
            {selected.length !== 0 && (
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            )}

            <table className="w-full ">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                      
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Breads
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Target
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Warning
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Create
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-500  font-normal">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } flex flex-row my-1`}
                        >
                         
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                <div className="grid grid-rows-2 grid-flow-col gap-1">
                                    {res?.selected_breads.map((res, index) => (
                                        <div
                                            key={index}
                                            className="flex-auto  text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                        >
                                            {res.bread_name}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="font-black flex-none px-9 py-2 text-left text-sm  text-gray-600 tracking-wider">
                               <div className="bg-red-400 text-white p-1 rounded-xl">

                               {res.target}
                               </div>
                            </td>
                            <td className=" flex-none px-9 py-2 text-left text-sm  text-gray-600 tracking-wider">
                            {res?.selected_ingredients.length === 0 ? (
                                    <AiFillWarning className="text-4xl text-red-600" />
                                ) : (
                                    <BsFillClipboardCheckFill className="text-2xl text-green-600" />
                                )}
                            </td>
                            <td className=" flex-none px-9 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <ActionDrawer
                                    icons={
                                        <BiSolidLayerPlus className="text-2xl text-blue-600" />
                                    }
                                    title="CREATE PRODUCTION"
                                    content={<CreateProductionForm data={res}/>}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
