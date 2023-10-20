import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BranchLayout from '@/Layouts/branch-layout';

export default function SettingsPage(props) {
  const {auth} =props
    return (
       <BranchLayout  branchid={auth.user.branchid} >
      ssss
       </BranchLayout>
    );
}
