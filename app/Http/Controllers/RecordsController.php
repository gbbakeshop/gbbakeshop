<?php

namespace App\Http\Controllers;

use App\Models\BranchRawMaterials;
use App\Models\Records;
use Illuminate\Http\Request;

class RecordsController extends Controller
{


    public function record_move_another_branch(Request $request)
    {
        for ($i = 0; $i < count($request->breads); $i++) {
            $record = Records::where('id', '=', $request->breads[$i])->first();
            // $isExist = Records::where('branchid','=',$request->newBranchid)
            // ->where('breadid','=',$record->breadid)->first();
            $isExist = Records::where('branchid', '=', $request->newBranchid)
                ->where('breadid', '=', $record->breadid)
                ->where('status', '=', 'bakers')
                ->orderBy('id', 'DESC')
                ->first();

            if ($isExist) {
                Records::where('id', '=', $request->breads[$i])->update([
                    'branchid' => $request->newBranchid,
                    'new_production' => $record->new_production + $isExist->new_production,
                ]);
                Records::where('id', $isExist->id)->delete();
            } else {
                Records::where('id', '=', $request->breads[$i])->update([
                    'branchid' => $request->newBranchid,
                ]);
            }

        }

        return response()->json([
            'status' => 'success',
            'message' => 'Transferred Successfully'
        ]);
    }
    public function edit_sales_report_records(Request $request)
    {
        Records::where('id', '=', $request->id)->update([
            'beginning' => $request->beginning,
            'new_production' => $request->new_production,
            'charge' => $request->charge,
            'overs' => $request->overs,
            'total' => $request->beginning + $request->new_production,
            'remaining' => $request->remaining,
            'soldout' => $request->soldout,
            'sales' => $request->sales,
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }
    public function edit_bread_report_records(Request $request)
    {
        Records::where('id', '=', $request->id)->update([
            'beginning' => $request->beginning,
            'new_production' => $request->new_production,
            'charge' => $request->charge,
            'overs' => $request->overs,
            'total' => $request->beginning + $request->new_production,
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }
    public function edit_bakers_report_records(Request $request)
    {
        Records::where('id', '=', $request->id)->update([
            'new_production' => $request->new_production
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }

    public function move_sales_records(Request $request)
    {

        if ($request->remaining !== 0) {
            Records::create([
                'branchid' => $request->branchid,
                'breadid' => $request->breadid,
                'bakerid' => $request->bakerid,
                'sellerid' => $request->sellerid,
                'bread_out' => 0,
                'bread_name' => $request->bread_name,
                'price' => $request->price,
                'beginning' => $request->remaining,
                // remaining becomes beginning
                'new_production' => 0,
                'remaining' => 0,
                'soldout' => 0,
                'total' => $request->remaining,
                'charge' => 0,
                'overs' => 0,
                'sales' => 0,
                'remarks1' => '',
                'remarks2' => '',
                'status' => 'bread',
                'date' => $request->date,
            ]);
        }
        Records::where('id', '=', $request->id)
            ->update([
                'branchid' => $request->branchid,
                'breadid' => $request->breadid,
                'bakerid' => $request->bakerid,
                'sellerid' => $request->sellerid,
                'bread_out' => $request->bread_out,
                'bread_name' => $request->bread_name,
                'price' => $request->price,
                'beginning' => $request->beginning,
                'new_production' => $request->new_production,
                'remaining' => $request->remaining,
                'soldout' => $request->soldout,
                'total' => $request->total,
                'charge' => $request->charge,
                'overs' => $request->overs,
                'sales' => $request->sales,
                'remarks1' => $request->remarks1,
                'remarks2' => $request->remarks2,
                'status' => $request->status,
                'date' => $request->date,
            ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Move successfully'
        ]);
    }

    public function move_records(Request $request)
    {
        for ($i = 0; $i < (count($request->breadid)); $i++) {

            $bakers = Records::where('branchid', '=', $request->branchid)
                ->where('breadid', '=', $request->breadid[$i])
                ->where('status', '=', 'bakers')
                ->orderBy('id', 'DESC')
                ->first();

            $bread = Records::where('branchid', '=', $request->branchid)
                ->where('breadid', '=', $request->breadid[$i])
                ->where('status', '=', 'bread')
                ->orderBy('id', 'DESC')
                ->first();

            if ($bakers) {
                if ($bread) {
                    $res = $bread->update([
                        'remarks1' => $bread->remarks . ' , ' . $request->remarks,
                        'charge' => ($bread->charge ?? 0) + ($request->charge ?? 0),
                        'overs' => ($bread->overs ?? 0) + ($request->overs ?? 0),
                        'new_production' => ($bread->new_production ?? 0) + ($bakers->new_production ?? 0),
                        'total' => ($bakers->new_production ?? 0) + ($bread->total ?? 0),
                    ]);

                    if ($res) {
                        Records::where('id', $bakers->id)->delete();
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

        
        $findBeginning = Records::where('branchid', $request->branchid)
        ->where('status', $request->params)
        ->with('getBreads') 
        ->get();
        return response()->json([
            'status' => $findBeginning,
        ]);

    }

    public function raw_materials_deduction($request, $branchid, $quantity)
    {

        $grams = $request['quantity'];
        $kilograms = ($grams * $quantity) / 1000;
        $brm = BranchRawMaterials::where([
            ['branchid', '=', $branchid],
            [
                'raw_materials_id',
                '=',
                $request['raw_materials_id']
            ]
        ])->first();

        $quantity = $brm->quantity - $kilograms;
        $brm->update(['quantity' => $quantity]);

    }

    public function create_new_records(Request $request)
    {


        for ($i = 0; $i < count($request->data['selected_ingredients']); $i++) {
            $this->raw_materials_deduction($request->data['selected_ingredients'][$i], $request->branchid, $request->quantity);
        }

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
                        'bread_name' => $request->data['selected_breads'][$i]['bread_name'],
                        'new_production' => $findBeginning->new_production + $request->data['selected_breads'][$i]['quantity'],
                        'total' => $findBeginning->new_production + $request->data['selected_breads'][$i]['quantity'],
                        'remarks1' => 0,
                        'remarks2' => 0,
                        'date' => 0,
                    ]);
            } else {
                Records::create([
                    'branchid' => $request->branchid,
                    'breadid' => $request->data['selected_breads'][$i]['bread_id'],
                    'bakerid' => $request->account['id'],
                    'beginning' => 0,
                    'bread_name' => $request->data['selected_breads'][$i]['bread_name'],
                    'new_production' => $request->data['selected_breads'][$i]['quantity'],
                    'total' => $request->data['selected_breads'][$i]['quantity'],
                    'status' => 'bakers',
                    'remarks1' => 0,
                    'remarks2' => 0,
                    'date' => 0,
                ]);
            }

        }

        return response()->json([
            'status' => 'success',
            'message' => 'Created Successfully'
        ]);
    }
}