import { useState } from "react";
import moment from "moment/moment";
import { FaEdit } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import {BsCheckCircleFill } from "react-icons/bs";
export default function BranchBakersReportTableComponent({ data }) {
    const [selected, setSelected] = useState([]);
    function isExistFunction(res) {
        //check if exist
        return selected.find((result) => result === res);
    }

    function addItem(res) {
        const isExist = isExistFunction(res);
        if (isExist == undefined) {
            // insert array of object
            setSelected([
                ...selected,
                res
            ]);
        } else {
            // delete array of object
            const newselected = selected.filter((item) => item !== res);
            setSelected(newselected);
        }
    }
    
    return (
        <div className="bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10">
            {selected.length !== 0 && (
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            )}

            <table className="w-full ">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        <th className="flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            <input
                                disabled
                                type="checkbox"
                                className="bg-gray-500 form-checkbox h-5 w-5 text-red-600"
                            />
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Bread
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Beginning
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            New Production
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Total
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Action
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Update
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Transfer
                        </th>
                       
                    </tr>
                </thead>
                <tbody  className="text-gray-500  font-normal">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } flex flex-row my-1`}
                        >
                            <td className="flex-none px-6 py-2 whitespace-no-wrap ">
                            <input onClick={() => addItem(res.id)} type="checkbox" className={`${isExistFunction(res.id) == undefined ? '' : 'border-red-500 border bg-red-500 text-red-500'}  form-checkbox h-5 w-5`} />
                                 </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.raw_materials}
                            </td> 
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bind}
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.quantity}
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                           
                                    <div
                                        className={`${res.warning < res.quantity?'bg-green-600':'bg-orange-600'} ml-4 text-xs inline-flex items-center font-bold leading-sm  px-3 py-1  border rounded`}
                                    >
                                    
                                      
                                        {
                                    res.warning < res.quantity?
                                    <BsCheckCircleFill  className={`text-white text-xl `}/>: 
                                    <AiFillWarning className={`text-white text-xl `}/>
                                }
                                    </div>
                            </td>
                            <td className=" flex-1 px-6 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                
                                {moment(res.created_at).format("L")}
                            </td>
                            <td className=" flex-none px-10 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaEdit className="text-2xl text-blue-600" />
                            </td>
                            <td className=" flex-none px-10 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaEdit className="text-2xl text-blue-600" />
                            </td>
                            {/* <td className=" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaTrashAlt className="text-xl text-red-600"/>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
