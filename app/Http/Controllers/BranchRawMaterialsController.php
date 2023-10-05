<?php

namespace App\Http\Controllers;

use App\Models\BranchRawMaterials;
use Illuminate\Http\Request;

class BranchRawMaterialsController extends Controller
{
    public function get_branch_raw_materials($branchid){
        $response = BranchRawMaterials::where('branchid','=',$branchid)->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
