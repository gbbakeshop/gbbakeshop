import { useState } from "react";
import moment from "moment/moment";
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import {BsCheckCircleFill } from "react-icons/bs";
export default function BranchSalesReportTableComponent({ data }) {
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
                      
                        <th className=" flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Bread
                        </th>
                        <th className=" flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Beginning
                        </th>
                        <th className=" flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            New Production
                        </th>
                        <th className=" flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Price
                        </th>
                        <th className=" flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Total
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Breadout
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Charges
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Over
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Remaining
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Soldout
                        </th>
                        <th className="  flex-1 px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Sales
                        </th>
                        <th className="  flex-none px-4 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Edit
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
                       
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bread_name}
                            </td> 
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.beginning}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.new_production}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                           
                            {res.price}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                
                            {res.total}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bread_out}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.charge}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.overs}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.remaining}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.soldout}
                            </td>
                            <td className=" flex-1 px-4 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                {res.sales}
                            </td>
                            <td className="   flex-none px-2 py-2 text-left text-sm  text-gray-600 tracking-wider">
                                <FaEdit className="text-2xl text-blue-600" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
