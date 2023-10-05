<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use App\Models\Breads;
use Illuminate\Http\Request;

class BreadsController extends Controller
{
    public function get_all_breads()
    {
        $response = Breads::orderBy('bread_name', 'asc')->get();
        return response()->json([
            'status' => $response
        ]);
    }

    public function create_breads(Request $request)
    {
        $bread = Breads::where('bread_name', $request->data['bread_name'])->first();
        if ($bread == null) {
            Breads::create($request->data);
            return response()->json([
                'status' => 'success',
                'message' => 'Successfully created!'
            ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Bread is already exist!'
            ]);
        }
           
    }

    public function delete_breads($id){
        $bread = Breads::where('id', $id);
        if($bread){
            $bread->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Delete Successfully'
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'error'
            ]);
        }
    }

    public function update_breads(Request $request)
    {
        $bread = Breads::where('bread_name', $request->data['bread_name'])->first();
        if ($bread == null) {
            Breads::find($request->data['id'])->update($request->data);
            return response()->json([
                'status' => 'success',
                'message' => 'Successfully Updated!'
            ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Bread is already exist!'
            ]);
        }
    }


}