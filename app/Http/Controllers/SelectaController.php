<?php

namespace App\Http\Controllers;

use App\Models\Selecta;
use Illuminate\Http\Request;

class SelectaController extends Controller
{
    public function get_all_selecta(){
        $response = Selecta::all();
        return response()->json([
            'status' => $response
        ]);
    }

 
}
