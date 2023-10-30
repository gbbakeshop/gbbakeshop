import ViewIcon from "@/_icons/view-icon";
import EditIcon from "@/_icons/edit-icon";
import DeleteIcon from "@/_icons/delete-icon";
import EyesIcon from "@/icons/eyes-icon"; // Make sure this path is correct
import { Link } from "@inertiajs/react";
import BranchAccountDelete from "./branch-account-delete";

export default function AccountTable({ data }) {
    const column = [
        { title: "Name" },
        { title: "Branch" },
        { title: "Position" },
        { title: "Email" },
        { title: "Actions" },
    ];
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
                                            {res.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>
                                            {res.get_branch.branch_name}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        {res.position}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex">{res.email}</div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex">
                                        <div className="w-4 mr-6 text-blue-500">
                                            <Link
                                                href={route("account_settings", {
                                                    branchid: res.branchid, // Replace with the appropriate branch ID source
                                                    userid: res.id,
                                                })}
                                            >
                                                <EyesIcon />
                                            </Link>
                                        </div>
                                        <div className="w-4 text-red-500">
                                            <BranchAccountDelete id={res.id} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
