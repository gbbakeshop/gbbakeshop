import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_selecta } from '@/services/selecta-services'
import SelectaTableComponent from './components/selecta-table';
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";

export default function SelectaPage(props) {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        get_all_selecta().then(res=>{
            setData(res)
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.product_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);


    return ( 
        <AdministratorLayout>
              <Search search={search} setSearch={setSearch} />
              {loading ? (
                <SkeletonLoader />
            ) : (
                <SelectaTableComponent  data={search == "" ? data : newData}  />
            )}
         </AdministratorLayout>
     );
}
