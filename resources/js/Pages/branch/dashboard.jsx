import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,usePage } from '@inertiajs/react';
import BranchLayout from '@/Layouts/branch-layout';

export default function BranchDashboardPage(props) {
    const { auth } = props;
    const { url } = usePage();
    const branchid =
    url.split("/")[2] == "bread-report"
        ? auth.user.branchid
        : url.split("/")[2];
    return (
       <BranchLayout  branchid={branchid} >
      ssss
       </BranchLayout>
    );
}
