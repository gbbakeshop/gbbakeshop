<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class AccountsController extends Controller
{

    public function update_personal_information(Request $request)
    {
        $user = User::where('id', $request->userid)->update([
            'name' => $request->name,
            'branchid' => $request->branchid,
            'position' => $request->position,
            'address' => $request->address
        ]);
        if ($user) {
            return response()->json([
                'status' => 'success',
                'message' => 'Updated successfully'
            ]);
        }

    }

    public function update_personal_credentials(Request $request)
    {
        if ($request->getPassword == '') {
            User::where('id', $request->userid)->update([
                'email' => $request->email,
            ]);
        } else {
            User::where('id', $request->userid)->update([
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'Updated successfully'
        ]);
    }

    public function get_specific_accounts($id)
    {
        $response = User::where('id', $id)->with('getBranch')->first();
        return response()->json([
            'status' => $response
        ]);
    }

    public function delete_accounts($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Deleted successfully'
        ]);
    }
    public function register_accounts(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        User::create([
            'name' => $request->name,
            'branchid' => $request->branch,
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
        $response = User::where('branchid', '=', $branchid)->with('getBranch')->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
