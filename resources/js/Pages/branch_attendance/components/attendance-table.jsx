import LoadingIcon from "@/_icons/loading-icon";
import CalendarIcon from "@/icons/calendar-icon";
import CheckIcon from "@/icons/check-icon";
import ExclamationIcon from "@/icons/exclamation-icon";
import { get_branch_attendance } from "@/services/attendance-services";
import moment from "moment";
import { useEffect, useState } from "react";

export default function AttendanceTable({branchid}) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        get_branch_attendance({
            branchid:branchid,
            date:moment().format("L")
        })
        .then(res=>{
            console.log(res)
            setLoading(false)
            setData(res)
        })
    }, []);

    function attendanceHandler(params) {
        alert('unauthorized')
    }
    return (
        <>
            <div class="relative shadow-md sm:rounded-lg mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr>
                        <th
                                class="px-2 py-2 text-center border-x-2 "
                            >
                                FULLNAME
                            </th>
                            <th
                                class="px-2 py-2 text-center border-x-2 "
                            >
                                POSITION
                            </th>
                            <th
                                colspan="2"
                                class="px-2 py-2 text-center border-x-2 "
                            >
                                AM
                            </th>
                            <th
                                colspan="2"
                                class="px-2 py-2 text-center border-x-2"
                            >
                                PM
                            </th>
                            <th
                                colspan="2"
                                class="px-2 py-2 text-center border-x-2"
                            >
                                AM
                            </th>
                            <th
                                colspan="2"
                                class="px-2 py-2 text-center border-x-2"
                            >
                                PM
                            </th>
                            <th class="px-2 py-2 text-center">TOTAL HOURS</th>
                            {/* <th class="px-2 py-2 text-center">DATE</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b ">
                        <td class="px-2 py-2 text-center border-r-2"></td>
                            <td class="px-2 py-2 text-center border-r-2">
                                
                            </td>
                            <td class="px-2 py-2 text-center border-r-2">IN</td>
                            <td class="px-2 py-2 text-center border-r-2">
                                Out
                            </td>
                            <td class="px-2 py-2 text-center border-r-2">IN</td>
                            <td class="px-2 py-2 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-2 py-2 text-center border-r-2">IN</td>
                            <td class="px-2 py-2 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-2 py-2 text-center border-r-2">IN</td>
                            <td class="px-2 py-2 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-2 py-2 text-center border-r-2"></td>
                            <td class="px-2 py-2 text-center border-r-2"></td>
                        </tr>
                        {data?.map((res, index) => (
                            <tr class="bg-white border-b ">
                                  <td class="px-6 py-4 text-center border-r-2">
                                  {res.user?.name}
                                  </td>
                                  <td class="px-6 py-4 text-center border-r-2">
                                    {res.user?.position}
                                    </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.am_in == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am_in !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am_in == null ? (
                                            <button
                                                onClick={() =>
                                                    attendanceHandler(
                                                        res.id,
                                                        "am_in"
                                                    )
                                                }
                                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                            >
                                                {loading ? (
                                                    <LoadingIcon />
                                                ) : (
                                                    " Time In"
                                                )}
                                            </button>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.am_out == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am_out !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am_out == null ? (
                                            <>
                                                {res.am_in == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "am_out"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time Out"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcoe />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.pm_in == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm_in !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm_in == null ? (
                                            <>
                                                {res.am_out == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "pm_in"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time In"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.pm_out == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm_out !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm_out == null ? (
                                            <>
                                                {res.pm_in == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "pm_out"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time Out"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.am2_in == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am2_in !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am2_in == null ? (
                                            <>
                                                {res.pm_out == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "am2_in"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time In"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.am2_out == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am2_out !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.am2_out == null ? (
                                            <>
                                                {res.am2_in == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "am2_out"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time Out"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.pm2_in == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm2_in !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm2_in == null ? (
                                            <>
                                                {res.am2_out == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "pm2_in"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time In"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>
                                <td class="px-6 py-4 text-center border-r-2">
                                    <center>
                                        {moment(res.date3).format("LL") !==
                                            moment().format("LL") &&
                                        res.pm2_out == null ? (
                                            <div className="text-red-500">
                                                <ExclamationIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm2_out !== null ? (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        ) : moment(res.date3).format("LL") ==
                                              moment().format("LL") &&
                                          res.pm2_out == null ? (
                                            <>
                                                {res.pm2_in == null ? (
                                                    <div className="text-orange-500">
                                                        <CalendarIcon />
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            attendanceHandler(
                                                                res.id,
                                                                "pm2_out"
                                                            )
                                                        }
                                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
                                                    >
                                                        {loading ? (
                                                            <LoadingIcon />
                                                        ) : (
                                                            " Time Out"
                                                        )}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className="text-green-500">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </center>
                                </td>

                                <td className="px-6 py-4 text-center border-r-2">
                                    {/* {getTimeTotal(
                                        res.am_in,
                                        res.am_out,
                                        res.pm_in,
                                        res.pm_out,
                                        res.am2_in,
                                        res.am2_out,
                                        res.pm2_in,
                                        res.pm2_out
                                    )} */}
                                    {res.total}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {moment(res.date3).format("LL")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
