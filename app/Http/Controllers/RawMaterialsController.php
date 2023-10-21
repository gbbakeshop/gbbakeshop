<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use App\Models\BranchRawMaterials;
use App\Models\RawMaterials;
use Illuminate\Http\Request;

class RawMaterialsController extends Controller
{

    public function edit_branch_raw_materials(Request $request){
        BranchRawMaterials::where('id',$request->id)->update([
            'quantity' =>$request->quantity
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Created Successfully'
        ]);
    }

    public function create_raw_materials(Request $request)
    {
        $exist = RawMaterials::where('raw_materials', $request->raw_materials)->first();
        $branches = Branches::all();
        if ($exist == null) {
            $rm = RawMaterials::create([
                'raw_materials' => $request->raw_materials,
                'bind' => 'Kilo'
            ]);

            for ($i = 0; $i < count($branches); $i++) {
                BranchRawMaterials::create([
                    'branchid' => $branches[$i]->id,
                    'raw_materials_id' =>$rm->id,
                    'raw_materials' => $request->raw_materials,
                    'quantity' => 0,
                    'bind' => 'Kilo',
                    'warning' => 30
                ]);
            }
          
            return response()->json([
                'status' => 'success',
                'message' => 'Created Successfully'
            ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Raw Materials is already exist!'
            ]);
        }

    }

    public function get_all_raw_materials()
    {
        $response = RawMaterials::orderBy('raw_materials', 'asc')->get();
        return response()->json([
            'status' => $response
        ]);
    }

    public function edit_raw_materials(Request $request)
    {

        $exist = RawMaterials::where('raw_materials', $request->raw_materials)->first();
        $branches = Branches::all();

        if ($exist == null) {
            RawMaterials::where('id', $request->id)->update([
                'raw_materials' => $request->raw_materials
            ]);
            for ($i = 0; $i < count($branches); $i++) {
                BranchRawMaterials::where([['raw_materials_id', '=',$request->id], ['branchid', '=', $branches[$i]->id]])
                ->update([
                    'raw_materials' => $request->raw_materials
                ]);
            }
            return response()->json([
                'status' => 'success',
                'message' => 'Created Successfully'
            ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Raw Materials is already exist!'
            ]);
        }
    }

    public function delete_raw_materials($id)
    {
        RawMaterials::where('id', $id)->delete();
        $branches = Branches::all();
        for ($i = 0; $i < count($branches); $i++) {
            BranchRawMaterials::where([['raw_materials_id', '=', $id], ['branchid', '=', $branches[$i]->id]])->delete();
        }
        return response()->json([
            'status' => 'success',
            'message' => 'Raw Materials is already exist!'
        ]);
    }

}