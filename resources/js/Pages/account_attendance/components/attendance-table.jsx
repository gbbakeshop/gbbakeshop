import CalendarIcon from "@/icons/calendar-icon";
import CheckIcon from "@/icons/check-icon";
import ExclamationIcon from "@/icons/exclamation-icon";
import LoadingIcon from "@/icons/loading-icon";
import {
    check_attendance,
    get_account_attendance,
} from "@/services/attendance-services";
import moment from "moment";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AttendanceTable({ userid, branchid }) {
    const [attendanceTable, setAttendanceTable] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(false);
    function getDaysInMonth(year, month) {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const daysInMonth = endDate.getDate();

        const daysArray = [];
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, month, day);
            daysArray.push({
                date: currentDate,
                dayOfMonth: day,
                // You can add more properties as needed
            });
        }

        return daysArray;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(daysInCurrentMonth);

    useEffect(() => {
        get_account_attendance({
            data: daysInCurrentMonth,
            userid: userid,
            branchid: branchid,
            date2: moment().format("M Y"),
        }).then((res) => {
            setAttendanceTable(res);
        });
    }, [refresh]);

    function attendanceHandler(id, updateWhere) {
        setLoading(true);
        check_attendance({
            id: id,
            userid: userid,
            branchid: branchid,
            updateWhere: updateWhere,
            date: moment().format(),
            dateNow: moment().format("L"),
        }).then((res) => {
            setRefresh(Math.random());
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Attendance Checked",
                showConfirmButton: false,
                timer: 1500,
            });
            setLoading(false);
        });
    }

    function getTimeTotal(
        am_in,
        am_out,
        pm_in,
        pm_out,
        am2_in,
        am2_out,
        pm2_in,
        pm2_out
    ) {
        const startTime1 = moment(am_in ?? new Date());
        const endTime1 = moment(am_out ?? new Date());

        const startTime2 = moment(pm_in ?? new Date());
        const endTime2 = moment(pm_out ?? new Date());

        const startTime3 = moment(am2_in ?? new Date());
        const endTime3 = moment(am2_out ?? new Date());

        const startTime4 = moment(pm2_in ?? new Date());
        const endTime4 = moment(pm2_out ?? new Date());

        const duration1 = moment.duration(endTime1.diff(startTime1));
        const duration2 = moment.duration(endTime2.diff(startTime2));
        const duration3 = moment.duration(endTime3.diff(startTime3));
        const duration4 = moment.duration(endTime4.diff(startTime4));

        // Sum up the individual durations
        const totalDuration = moment.duration(
            duration1.asMilliseconds() +
                duration2.asMilliseconds() +
                duration3.asMilliseconds() +
                duration4.asMilliseconds()
        );

        // Format the total duration as "HH:mm"
        const formattedTotalDuration = moment
            .utc(totalDuration.asMilliseconds())
            .format("HH:mm");
        return formattedTotalDuration;
    }

    return (
        <>
            <div class="relative shadow-md sm:rounded-lg mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr>
                            <th
                                colspan="2"
                                class="px-6 py-3 text-center border-x-2 "
                            >
                                AM
                            </th>
                            <th
                                colspan="2"
                                class="px-6 py-3 text-center border-x-2"
                            >
                                PM
                            </th>
                            <th
                                colspan="2"
                                class="px-6 py-3 text-center border-x-2"
                            >
                                AM
                            </th>
                            <th
                                colspan="2"
                                class="px-6 py-3 text-center border-x-2"
                            >
                                PM
                            </th>
                            <th class="px-6 py-3 text-center">TOTAL HOURS</th>
                            <th class="px-6 py-3 text-center">DATE</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="bg-white border-b ">
                            <td class="px-6 py-4 text-center">IN</td>
                            <td class="px-6 py-4 text-center border-r-2">
                                Out
                            </td>
                            <td class="px-6 py-4 text-center border-r-2">IN</td>
                            <td class="px-6 py-4 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-6 py-4 text-center border-r-2">IN</td>
                            <td class="px-6 py-4 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-6 py-4 text-center border-r-2">IN</td>
                            <td class="px-6 py-4 text-center border-r-2">
                                OUT
                            </td>
                            <td class="px-6 py-4 text-center border-r-2"></td>
                            <td class="px-6 py-4 text-center border-r-2"></td>
                        </tr>
                        {attendanceTable?.map((res, index) => (
                            <tr class="bg-white border-b ">
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
                                                <CheckIcon />
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
