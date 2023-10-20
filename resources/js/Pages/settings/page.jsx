
import AdministratorLayout from "@/Layouts/administrator-layout";
import DeleteUserForm from './components/DeleteUserForm';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import UpdateProfileInformationForm from './components/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Page({ auth, mustVerifyEmail, status }) {
    return (
        <AdministratorLayout>

            <div className="py-12 w-screen overflow-auto h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="w-full p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AdministratorLayout>
    );
}
