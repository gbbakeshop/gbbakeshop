import BranchLayout from '@/Layouts/branch-layout';
import Breadcrumbs from '@/_components/bread-crumbs';
import AccountProfile from '../branch_accounts/components/account-profile';
import BranchSettingsEditForm from '../account_settings/components/edit-form';

import BranchAccountTabs from './components/account-settings-tab';
export default function SettingsPage(props) {
  const {auth} =props 
  
    return (
       <BranchLayout
       position={auth.user.position}
       branchid={auth.user.branchid} >
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <Breadcrumbs   branchid={auth.user.branchid}/>
                <AccountProfile id={auth.user.id}/>
                <BranchAccountTabs
                 branch={auth.user.branchid} 
                 id={auth.user.id}/>
                <BranchSettingsEditForm 
                 positions={auth.user.position}
                data={auth.user}/>
            </div>
       </BranchLayout>
    );
}
