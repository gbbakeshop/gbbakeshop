<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\SelectaHistory;
use Illuminate\Http\Request;

class SelectaHistoryController extends Controller
{
    
    public function get_user_histories($id,$find){
       
        if($find == 'production'){
            $history = History::where('userid',$id)->with('user')->orderBy('created_at', 'DESC')->get();
        }else{
            $history = SelectaHistory::where('userid',$id)->with('user')->orderBy('created_at', 'DESC')->get(); 
        }
        return response()->json([
            'status' => $history ,
        ]);

    }
    public function get_branch_selecta_history(Request $request){
        $history = SelectaHistory::where([['branchid','=',$request->branchid],['date','=',$request->date]])->with('user')->orderBy('id', 'DESC')->get();

        return response()->json([
            'status' => $history ,
        ]);
    }
}
