import { useState } from "react";
import moment from "moment/moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";

export default function SelectaTableComponent({ data }) {
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
        { title: "Name of Product" },
        { title: "Price" },
        { title: "Created At" },
        { title: "Actions" },
    ];
    return (
        <div className="bg-white shadow-md rounded my-6 p-4">
              {selected.length !== 0 && (
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            )}
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
                    {data.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } border-gray-200 hover:bg-gray-100`}
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <input
                                            onClick={() => addItem(res.id)}
                                            type="checkbox"
                                            className={`${
                                                isExistFunction(res.id) ==
                                                undefined
                                                    ? ""
                                                    : "border-red-500 border bg-red-500 text-red-500"
                                            }  form-checkbox`}
                                        />
                                    </div>
                                    <span className="font-medium">
                                        {res.product_name}
                                    </span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    {res.price}
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                {moment(res.created_at).format("LLLL")}
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                        <ViewIcon />
                                    </div>
                                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                        <EditIcon />
                                    </div>
                                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                        <DeleteIcon />
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
