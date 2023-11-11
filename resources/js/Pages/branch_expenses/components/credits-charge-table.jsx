import EyesIcon from "@/icons/eyes-icon";
import { get_all_credits_charge } from "@/services/credits-services";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import CreateChargeCredit from "./create-charge-credit";
import { useSelector } from "react-redux";
import moment from "moment";
export default function CreditsChargeTable({data,branchid}) {
    const { url } = usePage();
    // const [data, setData] = useState([]);
    // const branchid = url.split("/")[2];
    // const { refresh } = useSelector((state) => state.app);
    // useEffect(() => {
       
    // }, [refresh]);
    return (
        <div className="w-full">
            <div className="">
                <div className="sm:flex items-center justify-between">
                    <CreateChargeCredit branchid={branchid}/>
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
                                                Name
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-5">Description</td>
                                <td className="pl-5">Amount</td>
                                <td className="pl-5">Status</td>
                                <td className="pl-5">Type</td>
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
                                                    {res.user.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-5">{res.discription}</td>
                                    <td className="pl-5">₱ {res.amount}</td>
                                    {/* <td className="pl-4 text-blue-500">
                                        <EyesIcon />
                                    </td> */}
                                    <td className="pl-5">
                                        {res.status ? (
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                {res.status}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                Unpaid
                                            </span>
                                        )}
                                    </td>
                                    <td className="pl-5">{res.type}</td>
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
