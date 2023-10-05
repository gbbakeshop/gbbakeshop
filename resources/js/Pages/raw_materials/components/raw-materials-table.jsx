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

    return (
        <div className="bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10">
            <div className="flex flex-row w-full">
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

            <table className="w-full ">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        <th className="flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            <input
                                disabled
                                type="checkbox"
                                className="bg-gray-500 form-checkbox h-5 w-5 text-red-600"
                            />
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Raw Materials
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Bind
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Created At
                        </th>
                        <th className=" flex-0 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Add
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Edit
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
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
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } flex flex-row my-1`}
                        >
                            <td className="flex-none px-6 py-2 whitespace-no-wrap ">
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
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {res.raw_materials}
                            </td>
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bind}
                            </td>
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {moment(res.created_at).format("LL")}
                            </td>
                            <td className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            <ActionDrawer
                                    icons={
                                        <AiFillFileAdd className="text-2xl text-blue-600" />
                                    }
                                    title="ADD INGREDIENTS"
                                    content={
                                        <RawMaterialsAdd 
                                        selectedid={res.id}
                                        data={res} />
                                    }
                                />
                            </td>
                            <td className=" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                <ActionDrawer
                                    icons={
                                        <FaEdit className="text-2xl text-blue-600" />
                                    }
                                    title="EDIT RAW MATERIALS"
                                    content={
                                        <RawMaterialsEditForm data={res} />
                                    }
                                />
                            </td>
                            <td className=" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {/* <FaTrashAlt className="text-xl text-red-600" /> */}
                                <RawMaterialsDelete data={res} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
