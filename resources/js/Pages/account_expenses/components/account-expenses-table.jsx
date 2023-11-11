
import EyesIcon from "@/icons/eyes-icon"; // Make sure this path is correct
import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import { get_account_credits_charge } from "@/services/credits-services";
import {usePage} from "@inertiajs/react";
export default function AccountExpensesTable({id}) {
    const [data,setData] = useState([])
    const { url } = usePage();
    const userid = url.split("/")[4]??id;
    
    const column = [
        { title: "Discription" },
        { title: "Amount" },
        { title: "Status" },
    ];

    useEffect(() => {
        get_account_credits_charge(userid)
        .then(res=>{
            setData(res)
        })
    }, []);

    return (
        <>
            <div className="my-6">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="text-gray-600 uppercase text-sm leading-normal">
                            {column.map((res, index) => (
                                <th key={index} className="py-3 px-6 text-left">
                                    {res.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {data.map((res, index) => (
                            <tr
                                key={index}
                                className="border-b border-red-200 hover:bg-red-100"
                            >
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img
                                                className="w-6 h-6 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                            />
                                        </div>
                                        <span className="font-medium">
                                            {res.user.name} {res.discription}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex">{res.amount??0}</div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex">{res.statys??'Unpaid'}</div>
                                </td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
