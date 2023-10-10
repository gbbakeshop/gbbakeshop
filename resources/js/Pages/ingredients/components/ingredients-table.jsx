import { useState } from "react";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";
import { MdCreateNewFolder } from "react-icons/md";
import IngredientsShow from "@/Pages/ingredients/components/ingredients-show";
import IngredientsEdit from "./ingredients-edit";
import IngredientsDelete from "./ingredients-delete";

export default function IngredientsTableComponent({ data }) {
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
            {selected.length !== 0 && (
                <Drawer title={"CREATE INGREDIENTS"} content={<>hello</>} />
            )}

           
            <table className="min-w-full">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            <input
                                disabled
                                type="checkbox"
                                className="bg-gray-500 form-checkbox h-5 w-5 text-red-600"
                            />
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                           Code
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Token
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Show
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Edit
                        </th>
                        <th className="flex-none px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Delete
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
                            <td className="flex-none  px-6 py-2 whitespace-no-wrap ">
                                <input
                                    onClick={() => addItem(res)}
                                    type="checkbox"
                                    className={`${
                                        isExistFunction(res) == undefined
                                            ? ""
                                            : "border-red-500 border bg-red-500 text-red-500"
                                    }  form-checkbox h-5 w-5`}
                                />
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                {res.code}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                              {res.selected_ingredients_token}
                            </td>
                           
                            <td className="flex-none px-6 py-2 whitespace-no-wrap">
                                <IngredientsShow data={res} />
                            </td>
                            <td className="flex-none px-5 py-2 whitespace-no-wrap">
                                <IngredientsEdit  data={res}/>
                            </td>
                            <td className="flex-none px-11 py-2 whitespace-no-wrap">
                                <IngredientsDelete data={res}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
