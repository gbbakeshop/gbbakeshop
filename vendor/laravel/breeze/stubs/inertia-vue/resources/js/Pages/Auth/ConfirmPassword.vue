<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    className="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError className="mt-2" :message="form.errors.password" />
            </div>

            <div className="flex justify-end mt-4">
                <PrimaryButton className="ml-4" :className="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Confirm
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
