<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use App\Models\BranchSelecta;
use App\Models\Selecta;
use Illuminate\Http\Request;

class SelectaController extends Controller
{
    
    public function update_selecta(Request $request){
        Selecta::where('id',$request->id)->update([
            'product_name' => $request->product_name,
            'price' => $request->price,
        ]);
        BranchSelecta::where('selectaid',$request->id)->update([
            'product_name' => $request->product_name,
            'price' => $request->price,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated successfully'
        ]);
    }
    public function delete_selecta($id)
    {
        Selecta::where('id',$id)->delete();
        BranchSelecta::where('selectaid',$id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Deleted successfully'
        ]);
    }
    public function create_selecta(Request $request)
    {

        $selecta = Selecta::where('product_name', $request->product_name)->first();
        if ($selecta == null) {
            $branches = Branches::all();
            $sel = Selecta::create([
                'product_name' => $request->product_name,
                'price' => $request->price,
            ]);
            for ($i = 0; $i < count($branches); $i++) {
                BranchSelecta::create([
                    'branchid' => $branches[$i]->id,
                    'selectaid'=>$sel->id,
                    'product_name' => $request->product_name,
                    'price' => $request->price,
                    'quantity' => 0,
                    'warning'=>20
                ]);
            }
            return response()->json([
                'status' => 'success',
                'message' => 'Created successfully'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Product name is already exist'
            ]);
        }

    }
    public function get_all_selecta()
    {
        $response = Selecta::orderBy('product_name', 'ASC')->get();
        return response()->json([
            'status' => $response
        ]);
    }
}
