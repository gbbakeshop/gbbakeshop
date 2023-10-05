import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_selecta } from '@/services/selecta-services'
import SelectaTableComponent from './components/selecta-table';
import SkeletonLoader from "@/_components/skeleton-loader";

export default function SelectaPage(props) {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_all_selecta().then(res=>{
            setData(res)
            setLoading(false);
        })
    }, []);

    return ( 
        <AdministratorLayout>
              {loading ? (
                <SkeletonLoader />
            ) : (
                <SelectaTableComponent data={data} />
            )}
         </AdministratorLayout>
     );
}
