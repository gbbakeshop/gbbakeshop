import EyesIcon from "@/icons/eyes-icon";
import { get_all_credits_charge } from "@/services/credits-services";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
export default function CreditsChargeTable() {
    const { url } = usePage();
    const [data, setData] = useState([]);
    const branchid = url.split("/")[2];

    useEffect(() => {
        get_all_credits_charge(branchid).then((res) => {
            setData(res);
        });
    }, []);
    return (
        <div class="w-full">
            <div class="py-4 md:py-7 px-4 ">
                <div class="sm:flex items-center justify-between">
                    <button
                        onclick="popuphandler(true)"
                        class="focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-red-700 hover:bg-red-600 focus:outline-none rounded"
                    >
                        <p class="text-sm font-medium leading-none text-white">
                            Add Charge/Expenses
                        </p>
                    </button>
                </div>
                <div class="mt-7 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                        <tr
                                    tabindex="0"
                                    class="focus:outline-none h-16 border border-gray-300 rounded"
                                >
                                    <td class="">
                                        <div className="flex">
                                            <div class="ml-10">
                                              
                                            </div>
                                            <div class="flex items-center pl-5">
                                                <p class="text-base font-medium leading-none text-gray-700 mr-2">
                                                    Name
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="pl-5">Qty</td>
                                    <td class="pl-5">Amount</td>
                                    <td class="pl-4 text-blue-500">
                                        Show
                                    </td>
                                </tr>
                            {data.map((res, index) => (
                                <tr
                                    key={index}
                                    tabindex="0"
                                    class="focus:outline-none h-16 border border-gray-300 rounded"
                                >
                                    <td class="">
                                        <div className="flex">
                                            <div class="ml-5">
                                                <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input
                                                        placeholder="checkbox"
                                                        type="checkbox"
                                                        class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                            <div class="flex items-center pl-5">
                                                <p class="text-base font-medium leading-none text-gray-700 mr-2">
                                                    {res.user.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="pl-5">{res.quantity}</td>
                                    <td class="pl-5">₱ {res.quantity * 5}</td>
                                    <td class="pl-4 text-blue-500">
                                        <EyesIcon />
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
