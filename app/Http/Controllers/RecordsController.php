<?php

namespace App\Http\Controllers;

use App\Models\Records;
use Illuminate\Http\Request;

class RecordsController extends Controller
{

    

    public function move_sales_records(Request $request)
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Move successfully'
        ]);
    }

    public function move_records(Request $request)
    {
        for ($i = 0; $i < (count($request->breadid)); $i++) {
            $bakers = Records::where([
                ['branchid', '=', $request->branchid],
                ['breadid', '=', $request->breadid[$i]],
                ['status', '=', 'bakers'],
            ])
                ->orderBy('id', 'DESC')
                ->first();

            $bread = Records::where([
                ['branchid', '=', $request->branchid],
                ['breadid', '=', $request->breadid[$i]],
                ['status', '=', 'bread'],
            ])
                ->orderBy('id', 'DESC')
                ->first();
            if ($bakers) {
                if ($bread) {
                    $res = $bread->update([
                        'remarks1' => $bread->remarks . ' , ' . $request->remarks,
                        'charge' => ($bread->charge ?? 0) + ($request->charge ?? 0),
                        'overs' => ($bread->overs ?? 0) + ($request->overs ?? 0),
                        'quantity' => ($bread->quantity ?? 0)+ ($bakers->quantity ?? 0),
                        'new_production' => ($bread->new_production ?? 0)+ ($bakers->new_production ?? 0),
                        'total' => ($bread->total ?? 0)+ ($bakers->total ?? 0),
                    ]);
                    if ($res) {
                        $bakers->delete();
                    }
                } else {
                    $bakers->update([
                        'remarks1' => $request->remarks,
                        'charge' => $request->charge,
                        'overs' => $request->overs,
                        'status' => $request->moveTo,
                    ]);
                }
            }

        }
        return response()->json([
            'status' => 'success',
            'message' => 'Move successfully'
        ]);

    }
    public function get_records(Request $request)
    {

        $findBeginning = Records::where([
            ['branchid', '=', $request->branchid],
            ['status', '=', $request->params],
        ])->get();
        return response()->json([
            'status' => $findBeginning,
        ]);

    }
    public function create_new_records(Request $request)
    {



        for ($i = 0; $i < count($request->data['selected_breads']); $i++) {
            $findBeginning = Records::where([
                ['breadid', '=', $request->data['selected_breads'][$i]['bread_id']],
                ['branchid', '=', $request->branchid],
                ['status', '=', 'bakers'],
            ])
                ->orderBy('id', 'DESC')
                ->first();

            if ($findBeginning) {
                Records::where('id', '=', $findBeginning->id)
                    ->update([
                        'branchid' => $request->branchid,
                        'breadid' => $request->data['selected_breads'][$i]['bread_id'],
                        'bakerid' => $request->account['id'],
                        // 'salerid' => '',
                        'bread_name' => $request->data['selected_breads'][$i]['bread_name'],
                        // 'beginning' => $remaining,
                        // remaining becomes beginning
                        'new_production' => $findBeginning->quantity + $request->data['selected_breads'][$i]['quantity'],
                        'quantity' => $findBeginning->quantity + $request->data['selected_breads'][$i]['quantity'],
                        // 'remaining' =>0,
                        // 'soldout' =>0,
                        // 'bread_out' =>0,
                        'total' => $findBeginning->quantity + $request->data['selected_breads'][$i]['quantity'],
                        // 'charge' =>0,
                        // 'overs' =>0,
                        // 'sales' =>0,
                        'remarks1' => 0,
                        'remarks2' => 0,
                        'date' => 0,
                    ]);

            } else {
                Records::create([
                    'branchid' => $request->branchid,
                    'breadid' => $request->data['selected_breads'][$i]['bread_id'],
                    'bakerid' => $request->account['id'],
                    // 'salerid' => '',
                    'bread_name' => $request->data['selected_breads'][$i]['bread_name'],
                    // remaining becomes beginning
                    'new_production' => $request->data['selected_breads'][$i]['quantity'],
                    'quantity' => $request->data['selected_breads'][$i]['quantity'],
                    // 'remaining' =>0,
                    // 'soldout' =>0,
                    // 'bread_out' =>0,
                    'total' => $request->data['selected_breads'][$i]['quantity'],
                    // 'charge' =>0,
                    // 'overs' =>0,
                    // 'sales' =>0,
                    'status' => 'bakers',
                    'remarks1' => 0,
                    'remarks2' => 0,
                    'date' => 0,
                ]);
            }

        }

        return response()->json([
            'status' => 'success',
        ]);
    }
}