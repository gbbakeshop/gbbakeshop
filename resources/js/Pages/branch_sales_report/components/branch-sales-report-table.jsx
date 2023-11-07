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
import { useSelector } from "react-redux";

export default function BranchSalesReportTableComponent({ data, account }) {
    const [selected, setSelected] = useState([]);
    const { isSideBar } = useSelector((state) => state.app);

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
        { title: "Name of Bread", total: "Total: " },
        {
            title: "Beginning",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.beginning),
                0
            ),
        },
        {
            title: "New Production",
            total: data.reduce(
                (total, obj) =>
                    total +
                    parseFloat(
                        obj.new_production == null ? 0 : obj.new_production
                    ),
                0
            ),
        },
        {
            title: "Price",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.price),
                0
            ),
        },
        {
            title: "Total",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.total),
                0
            ),
        },
        {
            title: "Breadout",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.bread_out),
                0
            ),
        },
        {
            title: "Charges",
            total: data.reduce(
                (total, obj) =>
                    total + parseFloat(obj.charge),
                0
            ),
        },
        {
            title: "Over",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.overs),
                0
            ),
        },
        {
            title: "Remaining",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.remaining),
                0
            ),
        },
        {
            title: "Soldout",
            total: data.reduce(
                (total, obj) => total + parseFloat(obj.soldout),
                0
            ),
        },
        {
            title: "Sales",
            total: data.reduce(
                (total, obj) =>
                    total + parseFloat(obj.sales),
                0
            ),
        },
        { title: "Actions", total: " " },
    ];
    return (
        <div className="overflow-auto">
            <div
                className={`${
                    isSideBar ? "" : ""
                } rounded my-6 `}
            >
                <table className="w-full table-auto">
                    <thead>
                        <tr className=" bg-red-500 text-white uppercase text-sm leading-normal">
                            {column.map((res, index) => (
                                <th
                                    key={index}
                                    className={`py-3 px-6 text-left`}
                                >
                                    {res.total}
                                </th>
                            ))}
                        </tr>
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
                                        {res.bread_name}
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.beginning}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.new_production}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.price}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.total}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.bread_out}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.charge}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.overs}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.remaining}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.soldout}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {res.sales}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex">
                                        <BranchSalesReportEdit
                                            account={account}
                                            data={res}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr className=" bg-red-500 text-white uppercase text-sm leading-normal">
                            {column.map((res, index) => (
                                <td
                                    key={index}
                                    className={`py-3 px-6 text-left`}
                                >
                                    {res.total}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
