import React, { useState, useEffect } from 'react';
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_recipes } from '@/services/recipes-services'
import RecipesTableComponent from './components/recipes-table';
import SkeletonLoader from "@/_components/skeleton-loader";
import RecipesTabsComponent from './components/recipes-tabs';

export default function RecipesPage(props) {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_all_recipes().then(res=>{
            setData(res)
            setLoading(false);
            console.log('res',res)
        })
    }, []);
    return ( 
        <AdministratorLayout>
            <RecipesTabsComponent />
              {loading ? (
                <SkeletonLoader />
            ) : (
                <RecipesTableComponent data={data} />
            )}
         </AdministratorLayout>
     );
}
