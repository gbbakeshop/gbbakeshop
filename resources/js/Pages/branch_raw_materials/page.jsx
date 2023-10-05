import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import BranchRawMaterialsTableComponent from "./components/branch-raw-materials-table";
import { get_branch_raw_materials } from '@/services/raw-materials-services'
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";

export default function BranchRawMaterialsPage(props) {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);
    const { url } = usePage()
    const branchid = url.split('/')[2]

    useEffect(() => {
        get_branch_raw_materials(branchid).then(res=>{
            setData(res)
            setLoading(false)
        })
    }, []);
    
    return ( 
        <AdministratorLayout>
            {loading ? <SkeletonLoader /> : <BranchRawMaterialsTableComponent data={data} />}
         </AdministratorLayout>
     );
}
