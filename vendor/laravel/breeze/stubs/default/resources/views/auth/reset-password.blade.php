<x-guest-layout>
    <form method="POST" action="{{ route('password.store') }}">
        @csrf

        <!-- Password Reset Token -->
        <input type="hidden" name="token" value="{{ $request->route('token') }}">

        <!-- Email Address -->
        <div>
            <x-input-label htmlFor="email" :value="__('Email')" />
            <x-text-input id="email" className="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" className="mt-2" />
        </div>

        <!-- Password -->
        <div className="mt-4">
            <x-input-label htmlFor="password" :value="__('Password')" />
            <x-text-input id="password" className="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password')" className="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div className="mt-4">
            <x-input-label htmlFor="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" className="block mt-1 w-full"
                                type="password"
                                name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
            <x-primary-button>
                {{ __('Reset Password') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
