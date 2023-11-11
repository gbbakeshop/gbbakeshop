import { isSetResponse } from "@/_redux/app-slice";
import {
    create_domination,
    get_domination,
} from "@/services/domination-services";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Domination() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [exist, setExist] = useState(true);
    const { date } = useSelector((state) => state.branchExpenses);
    const [domination, setDomination] = useState([
        {
            sign: "₱",
            bills: 1000,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 500,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 200,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 100,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 50,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 20,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 10,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 5,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 1,
            pcs: 0,
            total: 0,
        },
        {
            sign: "¢",
            bills: 0,
            pcs: 0,
            total: 0,
        },
    ]);

    const domination2 = [
        {
            sign: "₱",
            bills: 1000,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 500,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 200,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 100,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 50,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 20,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 10,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 5,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 1,
            pcs: 0,
            total: 0,
        },
        {
            sign: "¢",
            bills: 0,
            pcs: 0,
            total: 0,
        },
    ];

    const updatePcsAndTotal = (index, value) => {
        setDomination((prevDomination) => {
            const updatedDomination = [...prevDomination];
            updatedDomination[index] = {
                ...updatedDomination[index],
                pcs: value,
                total: value * updatedDomination[index].bills,
            };
            return updatedDomination;
        });
    };

    const cashOnHand = domination.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total;
    }, 0);

    function loadingState() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    useEffect(() => {
        get_domination({
            date: date,
        })
            .then((res) => {
                if (moment(date).format("L") < moment().format("L")) {
                    setDomination(domination2);
                    setExist(true);
                    setLoading(false);
                }else if (res.status.length !== 0) {
                    setExist(true);
                    setDomination(res.status);
                    setLoading(false);
                } else {
                    setDomination(domination2);
                    setExist(false);
                    setLoading(false);
                }
            })
            .catch((res) => {
                setLoading(false);
            });
    }, [date]);
    
    function submitDomination() {
        setLoading(true);
        dispatch(isSetResponse(loadingState()));
        create_domination({
            branchid: 0,
            domination: domination,
            date: moment().format("L"),
        })
            .then((res) => {
                setExist(true);
                setLoading(false);
                dispatch(isSetResponse(res));
            })
            .catch((err) => {
                setExist(false);
                setLoading(false);
                dispatch(isSetResponse(res));
            });
    }

    const sortedDomination = [...domination].sort((a, b) => b.bills - a.bills);

    return (
        <div className="relative overflow-x-auto">
            TOTAL ACTUAL CASH ON HAND: ₱ {cashOnHand}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* ... (table header) */}
                <tbody>
                    {sortedDomination.map((res, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {res.sign} {res.bills}
                            </th>
                            <td className="px-6 py-2">
                                {exist ? (
                                    res.pcs
                                ) : (
                                    <input
                                        type="number"
                                        onInput={(e) =>
                                            updatePcsAndTotal(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        defaultValue={res.pcs}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-2">{res.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!exist && (
                <button
                    disabled={loading}
                    onClick={submitDomination}
                    class="mt-5 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                >
                    Save
                </button>
            )}
        </div>
    );
}
