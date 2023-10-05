<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use Illuminate\Http\Request;

class BranchesController extends Controller
{
    public function get_all_branches(){
        $response = Branches::all();
        return response()->json([
            'status' => $response
        ]);
    }
}
