<?php

namespace App\Http\Controllers;

use App\Models\Charge;
use Illuminate\Http\Request;

class ChargeController extends Controller
{

    public function create_charge_credit(Request $request)
    {
        Charge::create([
            'branchid' => $request->branchid,
            'type' => $request->type,
            'userid' => $request->userid,
            'amount' => $request->amount,
            'discription' => $request->discription,
            'date' => $request->date,
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Created Successfully'
        ]);
    }
    public function get_all_credits_charge(Request $request)
    {
        $charge = Charge::where([['branchid','=',$request->branchid],['date','=',$request->date]])->with('user')->get();
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
