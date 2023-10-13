import { useState } from "react";
import moment from "moment/moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import Drawer from "@/_components/drawer";
import RawMaterialsForm from "./raw-materials-form";
import RawMaterialsEditForm from "./raw-materials-edit";
import ActionDrawer from "@/_components/action-drawer";
import RawMaterialsDelete from "./raw-materials-delete";
import RawMaterialsCreateForm from "./raw-materials-create";
import RawMaterialsAdd from "./raw-materials-add";
import CreateIcon from "@/_icons/create-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";

export default function RawMaterialsComponent({ data }) {
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
        { title: "Created At" },
        { title: "Actions" },
    ];
    return (
        <div className="bg-white shadow-md rounded my-6">
            <div className="flex flex-row w-full p-4">
                <div className="flex-1">
                    {selected.length !== 0 && (
                        <Drawer
                            title={"CREATE INGREDIENTS"}
                            content={
                                <RawMaterialsForm
                                    selected={selected}
                                    data={data}
                                />
                            }
                        />
                    )}
                </div>
                <div className="flex-none">
                    <Drawer
                        title="CREATE RAW MATERIALS"
                        content={<RawMaterialsCreateForm />}
                    />
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
                                        {res.raw_materials}
                                    </span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">{res.bind}</td>

                            <td className="py-3 px-6 text-left">
                                {moment(res.created_at).format("LLLL")}
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    <ActionDrawer
                                        icons={
                                            <div className="w-4 mr-2 text-green-500">
                                                <CreateIcon />
                                            </div>
                                        }
                                        title="ADD INGREDIENTS"
                                        content={
                                            <RawMaterialsAdd
                                                selectedid={res.id}
                                                data={res}
                                            />
                                        }
                                    />
                                    <ActionDrawer
                                        icons={
                                            <div className="w-4 mr-2 text-blue-500">
                                                <EditIcon />
                                            </div>
                                        }
                                        title="EDIT RAW MATERIALS"
                                        content={
                                            <RawMaterialsEditForm data={res} />
                                        }
                                    />

                                    <RawMaterialsDelete
                                        icons={
                                            <div className="w-4 mr-2 text-red-500">
                                                <DeleteIcon />
                                            </div>
                                        }
                                        data={res}
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
