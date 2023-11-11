import { useState } from "react";
import moment from "moment/moment";
import { BsInboxes } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { AiFillWarning } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";
import PencilIcon from "@/icons/pencil-icon";
import BranchSelectaEditRecord from "./branch-select-edit-record";

export default function BranchSelectaHistoryTableComponent({ data, userid }) {
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


    return (
        <div className=" my-6">
            <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                {data.map((res, index) => (
                    <div key={index}>
                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <div className="flex">
                                    <a
                                        href="#"
                                        className="text-red-600 font-bold"
                                    >
                                        {res?.user?.name}
                                    </a>
                                    <p className="lowercase ml-3 mt-1 text-xs text-gray-500">
                                        3 min ago
                                    </p>
                                </div>

                                <p className="text-sm">
                                    {res?.user?.name}{" "}
                                    {res?.message && (
                                        <>
                                            {res.message.includes(
                                                "created "
                                            ) ? (
                                                <span>
                                                    {(() => {
                                                        const createdIndex =
                                                            res.message.indexOf(
                                                                "created "
                                                            );
                                                        if (
                                                            createdIndex !== -1
                                                        ) {
                                                            const parsedJson =
                                                                res.message.substring(
                                                                    createdIndex +
                                                                        8
                                                                );
                                                            try {
                                                                return (
                                                                    "created " +
                                                                    JSON.parse(
                                                                        parsedJson
                                                                    ).map(
                                                                        (
                                                                            result
                                                                        ) =>
                                                                            result.bread_name +
                                                                            " " +
                                                                            result.quantity
                                                                    ) +
                                                                    "qty"
                                                                );
                                                            } catch (error) {
                                                                console.error(
                                                                    "Error parsing JSON:",
                                                                    error
                                                                );
                                                                return null;
                                                            }
                                                        }
                                                    })()}
                                                </span>
                                            ) : (
                                                res.message
                                            )}
                                            .
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
