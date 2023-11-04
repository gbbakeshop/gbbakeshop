import { useState } from "react";
import moment from "moment/moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import BranchRawMaterialsUpdate from "./branch-raw-materials-update";
import BranchRawMaterialsUpdateForm from "./branch-raw-materials-update-form";
import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";

export default function BranchRawMaterialsTableComponent({ data,position }) {
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
        { title: "Name of Raw Materials" },
        { title: "Bind" },
        { title: "Quantity" },
        { title: "Status" },
        { title: "Created At" },
        !position && { title: "Actions" },
    ];

    return (
        <div className="my-6">
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
                        <tr  key={index}  className="border-b border-red-200 hover:bg-red-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    {res.raw_materials}
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">{res.bind}</td>
                            <td className="py-3 px-6 text-left">
                                {res.quantity}kg
                            </td>
                            <td className="py-3 px-6 text-left">
                                {res.warning < res.quantity ? (
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                        Good
                                    </span>
                                ) : (
                                    <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        Low Supplies
                                    </span>
                                )}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {moment(res.created_at).format("LLLL")}
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    {/* <div className="w-4 mr-2">
                                        <ViewIcon />
                                    </div> */}

                                    {/* <BranchRawMaterialsUpdate
                                        icons={
                                            <div className="w-4 mr-2 text-blue-500">
                                                <EditIcon />
                                            </div>
                                        }
                                        data={res}
                                    /> */}
                                    {
                                        !position &&  <BranchRawMaterialsUpdateForm data={res}/>
                                    }
                                    {/* <div className="w-4 mr-2">
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
