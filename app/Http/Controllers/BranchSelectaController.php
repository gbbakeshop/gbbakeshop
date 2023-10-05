<?php

namespace App\Http\Controllers;

use App\Models\BranchSelecta;
use Illuminate\Http\Request;

class BranchSelectaController extends Controller
{
    public function get_branch_selecta($branchid){
        $response = BranchSelecta::where('branchid','=',$branchid)->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
