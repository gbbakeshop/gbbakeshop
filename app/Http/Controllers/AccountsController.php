<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class AccountsController extends Controller
{

    public function register_accounts(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        User::create([
            'name' => $request->name,
            'branchid' => $request->branchid,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'position' => $request->position
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Registration successfully'
        ]);
    }
    public function get_all_accounts()
    {
        $response = User::where('position', '<>', 'admin')->with('getBranch')->get();
        return response()->json([
            'status' => $response
        ]);
    }

    public function get_branch_accounts($branchid)
    {
        $response = User::where('branchid', '=', $branchid)->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
