<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
  public function get_branch_history(Request $request){
    $history = History::where('date',$request->date)->with('user')->orderBy('created_at', 'desc')->get();
    return response()->json([
        'status' => $history,
        'message' => 'Delete Successfully'
    ]);
  }
}
