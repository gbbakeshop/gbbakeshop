
import { usePage } from  '@inertiajs/react';

export default function DetailsTag({children,title,isOpen,data,active}) {
    const  { url }  = usePage();
    const page = url.split('/')[3]
    const branchid = url.split('/')[2]

    return ( 
        <details className="text-red-600 font-bold my-4" open={branchid == data?.id || branchid == active ?true:false}>
        <summary>
            <span className="text-sm ml-2 text-red-600 p-1">
              {active == 'auth' ?title:data?.branch_name} 
            </span>
        </summary>
        <ul className="ml-5">
            {children}
        </ul>
    </details>
     );
}
