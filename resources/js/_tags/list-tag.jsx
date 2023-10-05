import { Link } from "@inertiajs/react";
import { usePage } from  '@inertiajs/react';


export default function ListTags({ title,icon,href,active,branch_id,active1,active2 }) {
    const  { url }  = usePage();
    const page = url.split('/')[3]
    const branchid = url.split('/')[2]

    return (
        <li className="font-bold uppercase">
            <Link
                className={`${branchid == branch_id && page == active ||
                     active == 'dashboard'||
                    branchid == 'auth' && page == active || 
                    branchid == 'auth' && page == active1 ||
                    branchid == 'auth' && page == active2?'bg-red-600 text-white ':'bg-red-50 text-red-500'} rounded-lg p-2 my-2 flex w-full justify-between cursor-pointer items-center`}
                href={href}
            >
                <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  {icon}
                    <span className="text-sm ml-2">{title}</span>
                </div>
                {/* <div className="py-1 px-3 bg-gray-100 rounded text-red-600 flex items-center justify-center text-xs">
                    5
                </div> */}
            </Link>
        </li>
    );
}
