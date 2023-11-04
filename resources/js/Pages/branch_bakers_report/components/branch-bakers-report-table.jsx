import { useState } from "react";
import moment from "moment/moment";
import BranchBakersReportEdit from "./branch-bakers-report-edit";
import Drawer from "@/_components/drawer";
import ActionDrawer from "@/_components/action-drawer";
import MoveToBreadReportForm from "./move-to-bread-report-form";
import MoveToAnotherBranch from "./move-to-another-branch";

export default function BranchBakersReportTableComponent({
    account,
    data,
    branchid,
}) {
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
    const position = account.position;
    const column = [
        { title: "Name of Bread" },
        { title: "New Production" },
        { title: "Date Created" },
        position == "Sales Lady" ||
            position == "Cashier" ||
            position == "Supervisor" ||
            (position == "admin" && { title: "Actions" }),
    ];
    return (
        <div className=" my-6 p-4">
            {selected.length !== 0 && (
                <MoveToAnotherBranch
                    branchid={branchid}
                    setSelected={setSelected}
                    selected={selected}
                />
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
                    {data?.map((res, index) => (
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
                                        {position == "Sales Lady" ||
                                        position == "Cashier" ||
                                        position == "Supervisor" ||
                                        position == "admin" ? (
                                            <input
                                                checked={
                                                    isExistFunction(res.id) ==
                                                    undefined
                                                        ? false
                                                        : true
                                                }
                                                onClick={() => addItem(res.id)}
                                                type="checkbox"
                                                className={`${
                                                    isExistFunction(res.id) ==
                                                    undefined
                                                        ? ""
                                                        : "border-red-500 border bg-red-500 text-red-500"
                                                }  form-checkbox`}
                                            />
                                        ) : null}
                                    </div>
                                    <span className="font-medium">
                                        {res.bread_name}
                                    </span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    {res.new_production}
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                {moment(res.created_at).format("LLLL")}
                            </td>

                            <td className="py-3 px-6 text-left">
                                {position == "Sales Lady" ||
                                position == "Cashier" ||
                                position == "Supervisor" ||
                                position == "admin" ? (
                                    <div className="flex">
                                        <BranchBakersReportEdit
                                            account={account}
                                            data={res}
                                        />
                                        <MoveToBreadReportForm
                                            account={account}
                                            branchid={branchid}
                                            data={res}
                                        />
                                    </div>
                                ) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
