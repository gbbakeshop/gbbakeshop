import React, { useState, useEffect } from 'react';
import { usePage } from "@inertiajs/react";
import { RxDashboard } from "react-icons/rx";
import { get_all_branches } from '@/services/branches-services';

export default function Breadcrumbs({branchid}) {
  const [data,setData] = useState([])
  const { url } = usePage();
  const path1 = url.split('/')[1]
  const path2 = url.split('/')[2]
  const path3 = url.split('/')[3]

  useEffect(() => {
    get_all_branches().then(res=>{
        setData(res)
    })
}, []);

  function findBranch(id) {
    return data.find(res =>res.id == id); 
 }
//  console.log('findBranch(path2)',findBranch(path2) == undefined ?(findBranch(path2).branch_name?.branch_name):path2)
// console.log('findBranch(path2).branch_name?.branch_name',findBranch(path2).branch_name)
    return (
        <nav
            className="mb-5 shadow-sm capitalize flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <RxDashboard  className="w-4 h-4 mr-2.5"/>
                        {findBranch(branchid)?.branch_name }-({path1})
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg
                            className="w-3 h-3 mx-1 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <a
                            href="#"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                        {findBranch(path2)?.branch_name == undefined?path2:findBranch(path2)?.branch_name}
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            className="w-3 h-3 mx-1 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                        {path3?.replace(/_/g,' ')}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
}
