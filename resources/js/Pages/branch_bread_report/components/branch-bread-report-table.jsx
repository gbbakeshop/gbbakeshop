import { useState } from "react";
import moment from "moment/moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { BiSolidLayerPlus } from "react-icons/bi";
import MoveToSalesReportForm from "./move-to-sales-report-form";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";

export default function BranchBreadReportTableComponent({ account,data }) {
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
            {/* {selected.length !== 0 && (
                <Drawer
                    title={"MOVE TO SALES REPORT"}
                    content={
                        <MoveToSalesReportForm
                            setSelected={setSelected}
                            selected={selected}
                        />
                    }
                />
            )} */}

            <table className="w-full ">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        {/* <th className="flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            <input
                                disabled
                                type="checkbox"
                                className="bg-gray-500 form-checkbox h-5 w-5 text-red-600"
                            />
                        </th> */}
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Bread
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Beginning
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            New Production
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Charges
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Over
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Total
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Updated at
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Status
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Action
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-500  font-normal">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.breadid) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } flex flex-row my-1`}
                        >
                            {/* <td className="flex-none px-6 py-2 whitespace-no-wrap ">
                                <input
                                    checked={
                                        isExistFunction(res.breadid) ==
                                        undefined
                                            ? false
                                            : true
                                    }
                                    onClick={() => addItem(res.breadid)}
                                    type="checkbox"
                                    className={`${
                                        isExistFunction(res.breadid) ==
                                        undefined
                                            ? ""
                                            : "border-red-500 border bg-red-500 text-red-500"
                                    }  form-checkbox h-5 w-5`}
                                />
                            </td> */}
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bread_name}
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.beginning ?? 0}
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.new_production ?? 0}
                            </td>
                            <td className=" flex-1 px-10 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.charge ?? 0}
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.overs ?? 0}
                            </td>
                            <td className=" flex-1 px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.total ?? 0}
                            </td>
                            <td className=" flex-1 px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {moment(res.updated_at).format("LLLL")}
                            </td>
                            <td className=" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.new_production == 0 && res.sellerid == account.id?'Done':'Pend'}
                            </td>
                            <td className=" flex-none px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <ActionDrawer
                                    icons={
                                        <BiSolidLayerPlus className="text-2xl text-blue-600" />
                                    }
                                    title="CREATE PRODUCTION"
                                    content={
                                        <MoveToSalesReportForm
                                        account={account}
                                            data={res}
                                        />
                                    }
                                />
                            </td>
                            <td className=" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaEdit className="text-2xl text-blue-600" />
                            </td>
                            {/* <td className=" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaTrashAlt className="text-xl text-red-600"/>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
