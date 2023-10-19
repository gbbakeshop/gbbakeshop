<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="current_password" value="Current Password" />

                <TextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    className="mt-1 block w-full"
                    autocomplete="current-password"
                />

                <InputError :message="form.errors.current_password" className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="password" value="New Password" />

                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    className="mt-1 block w-full"
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password" className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    className="mt-1 block w-full"
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password_confirmation" className="mt-2" />
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition enter-from-className="opacity-0" leave-to-className="opacity-0" className="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
