import { useState } from "react";
import moment from "moment/moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import BranchSalesReportEdit from "./branch-sales-report-edit";
import ActionDrawer from "@/_components/action-drawer";
import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";

export default function BranchSalesReportTableComponent({ data, account }) {
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
        { title: "Name of Bread" },
        { title: "Beginning" },
        { title: "New Production" },
        { title: "Price" },
        { title: "Total" },
        { title: "Breadout" },
        { title: "Charges" },
        { title: "Over" },
        { title: "Remaining" },
        { title: "Soldout" },
        { title: "Sales" },
        { title: "Actions" },
    ];
    return (
        <div className="bg-white shadow-md rounded my-6 overflow-x-scroll w-[169vh]">
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
                        <tr  key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    {res.bread_name}
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                {res.beginning}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {res.new_production}
                            </td>
                            <td className="py-3 px-6 text-left">{res.price}</td>
                            <td className="py-3 px-6 text-left">
                                {res.total}
                            </td>{" "}
                            <td className="py-3 px-6 text-left">
                                {res.bread_out}
                            </td>{" "}
                            <td className="py-3 px-6 text-left">
                                {res.charge}
                            </td>
                            <td className="py-3 px-6 text-left">{res.overs}</td>
                            <td className="py-3 px-6 text-left">
                                {res.remaining}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {res.soldout}
                            </td>
                            <td className="py-3 px-6 text-left">{res.sales}</td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex">
                                    {/* <div className="w-4 mr-2">
                                        <ViewIcon />
                                    </div> */}
                                    <ActionDrawer
                                        icons={
                                            <div className="w-4 mr-2 text-blue-500">
                                                <EditIcon />
                                            </div>
                                        }
                                        title="EDIT SALES REPORT"
                                        content={
                                            <BranchSalesReportEdit
                                                account={account}
                                                data={res}
                                            />
                                        }
                                    />

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
