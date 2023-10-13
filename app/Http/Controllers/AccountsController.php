<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AccountsController extends Controller
{
    public function get_all_accounts(){
        $response = User::where('position','<>','admin')->with('getBranch')->get();
        return response()->json([
            'status' => $response
        ]);
    }

    public function get_branch_accounts($branchid){
        $response = User::where('branchid','=',$branchid)->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
