<?php

namespace App\Http\Controllers;

use App\Models\Charge;
use Illuminate\Http\Request;

class ChargeController extends Controller
{

    public function get_all_credits_charge($branchid)
    {
        $charge = Charge::where('branchid', $branchid)->with('user')->get();
        return response()->json([
            'status' => $charge,
        ]);
    }
    public function get_account_credits_charge($id)
    {
        $charge = Charge::where('userid', $id)->with('user')->get();
        return response()->json([
            'status' => $charge,
        ]);
    }
}
