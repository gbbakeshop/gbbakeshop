import { useState } from "react";
import BreadDropDownComponent from "./bread-dropdown";

export default function AccountsTableComponent({ data }) {
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
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
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
                           Name
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Branch
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Email
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Mobile
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            gender
                        </th>
                        <th className="flex-1 px-6 py-3 text-left text-xs leading-4  text-gray-600 tracking-wider">
                            Mobile
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
                                    onClick={() => addItem(res.id)}
                                    type="checkbox"
                                    className={`${
                                        isExistFunction(res.id) == undefined
                                            ? ""
                                            : "border-red-500 border bg-red-500 text-red-500"
                                    }  form-checkbox h-5 w-5`}
                                />
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                {res.name}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                {res.branchid}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                {res.email}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                {res.mobile}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                               {res.gender}
                            </td>
                            <td className="flex-1 px-6 py-2 whitespace-no-wrap">
                                <BreadDropDownComponent />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
