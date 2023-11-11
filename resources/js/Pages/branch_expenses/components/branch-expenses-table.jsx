import EyesIcon from "@/icons/eyes-icon";
import { get_all_credits_charge } from "@/services/credits-services";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import CreateChargeCredit from "./create-charge-credit";
import { useSelector } from "react-redux";
import moment from "moment";
import CreateExpenses from "./create-expenses";
import ShowReceipt from "./show-receipts";
export default function BranchExpensesTable({data,branchid}) {
 
    return (
        <div className="w-full">
            <div className="">
                <div className="sm:flex items-center justify-between">
                    <CreateExpenses branchid={branchid}/>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            <tr
                                tabIndex="0"
                                className="focus:outline-none h-8 border border-gray-300 rounded"
                            >
                                <td className="">
                                    <div className="flex">
                                        <div className="ml-10"></div>
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                                Name of Supplier
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-5">
                                    Description (Receipt ID #)</td>
                                <td className="pl-5">Amount</td>
                                <td className="pl-5">Date</td>
                            </tr>
                            {data.map((res, index) => (
                                <tr
                                    key={index}
                                    tabIndex="0"
                                    className="focus:outline-none h-8 border border-gray-300 rounded"
                                >
                                    <td className="">
                                        <div className="flex">
                                            <div className="ml-5">
                                                <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input
                                                        placeholder="checkbox"
                                                        type="checkbox"
                                                        className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                                    {res.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-5">
                                    <ShowReceipt data={res}/>
                                       </td>
                                    <td className="pl-5">₱ {res.amount}</td>
                                    {/* <td className="pl-4 text-blue-500">
                                        <EyesIcon />
                                    </td> */}
                                
                                    <td className="pl-5">
                                        {moment(res.created_at).format("LLL")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
