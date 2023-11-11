<?php

namespace App\Http\Controllers;

use App\Models\BranchSelecta;
use App\Models\BranchSelectaRecord;
use App\Models\SelectaHistory;
use Illuminate\Http\Request;

class BranchSelectaRecordController extends Controller
{

    public function update_selecta_quantity_record(Request $request){
        $selecta = BranchSelectaRecord::where('id',$request->id)->first();

        BranchSelectaRecord::where('id',$request->id)->update([
          'quantity'=>$request->quantity,
          'sales'=>$request->sales,
        ]);
        SelectaHistory::create([
            'branchid' => $selecta->branchid,
            'userid' => $request->userid,
            'message' => ' edit the '.$request->product_name.' quantity from '.$selecta->quantity.' to '. $request->quantity, 
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully!'
        ]);
    }

    public function get_branch_selecta_records(Request $request){
        $records=BranchSelectaRecord::where([['branchid','=',$request->branchid],['date','=',$request->date]])->with('selecta')->get();
        return response()->json([
            'status' => $records,
            'message' => 'Inventory Successfully!'
        ]);
    }
    
    public function update_selecta_quantity(Request $request){
        $selecta= BranchSelecta::where('id',$request->id)->first();
        
        BranchSelecta::where('id',$request->id)->update([
            'quantity'=>$request->quantity
        ]);
      
        SelectaHistory::create([
            'branchid' => $selecta->branchid,
            'userid' => $request->userid,
            'message' => ' edit the '.$selecta->product_name.' from '.$selecta->quantity.' to '. $request->quantity, 
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Inventory Successfully!'
        ]);
    }
    public function update_selecta_remaining(Request $request)
    {
        $selecta = BranchSelecta::where('id', $request->id)->first();
        $soldout = $selecta->quantity - $request->remaining;
        $sales = ($selecta->quantity - $request->remaining) * $selecta->price;

        BranchSelecta::where('id', $request->id)->update([
            'quantity'=>$selecta->quantity - $soldout,
        ]);
        BranchSelectaRecord::create([
            'branchid' => $selecta->branchid,
            'selectaid' => $selecta->selectaid,
            'branchselectaid' => $selecta->id,
            'quantity' => $soldout,
            'price' => $selecta->price,
            'sales' => $sales,
            'date' => $request->date,
        ]);
        SelectaHistory::create([
            'branchid' => $selecta->branchid,
            'userid' => $request->userid,
            'message' => 'added sales record of '.$selecta->product_name.' and quantity of '.$soldout, 
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Inventory Successfully!'
        ]);
    }
}
