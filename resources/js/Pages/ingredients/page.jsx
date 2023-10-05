import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_ingredients } from '@/services/ingredients-services'
import IngredientsTableComponent from './components/ingredients-table';
import SkeletonLoader from "@/_components/skeleton-loader";
import IngredientsTabsComponent from './components/ingredients-tabs';
import { useSelector } from 'react-redux';
export default function IngredientsPage(props) {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app)

    useEffect(() => {
        get_all_ingredients().then(res=>{
            setData(res.status)
            setLoading(false);
        })
    }, [refresh]);
    
    return ( 
        <AdministratorLayout>
            <IngredientsTabsComponent />
              {loading ? (
                <SkeletonLoader />
            ) : (
                <IngredientsTableComponent data={data} />
            )}
         </AdministratorLayout>
     );
}
