<?php

namespace App\Http\Controllers;

use App\Models\BranchRawMaterials;
use App\Models\BranchSelectaRecord;
use App\Models\Breads;
use App\Models\Expenses;
use App\Models\History;
use App\Models\Records;
use App\Models\Remarks;
use App\Models\Charge;
use DB;
use Illuminate\Http\Request;

class RecordsController extends Controller
{

    public function get_branch_period($period,$branchid)
    {
        if ($period == 'Daily') {
               $records = Records::where([
                ['status', '=','done'],
                ['branchid', '=',$branchid]
                ])
                ->groupBy('date')
                ->selectRaw('date as label, SUM(sales) as total_sales')
                ->get();

                $charges = Charge::where([
                    ['branchid', '=', $branchid],
                    ['amount', '<>', null],
                ])
                ->groupBy('date')
                ->selectRaw('date as label, SUM(amount) as total_charge')
                ->get();

                $expenses = Expenses::where(
                    'branchid', '=', $branchid
                )
                ->groupBy('date')
                ->selectRaw('date as label, SUM(amount) as total_expenses')
                ->get();

            return response()->json([
                'records' => $records,
                'charges'=>$charges,
                'expenses'=>$expenses,
                'message' => 'Transferred Successfully'
            ]);
        } else if ($period == 'Weekly') {
            $records = Records::where([
                ['status', '=','done'],
                ['branchid', '=',$branchid]
                ])
                ->groupBy(DB::raw('WEEK(created_at)'))
                ->selectRaw('WEEK(created_at) as label, SUM(sales) as total_sales')
                ->get();

                $charges = Charge::where([
                    ['branchid', '=', $branchid],
                    ['amount', '<>', null],
                ])
                ->groupBy(DB::raw('WEEK(created_at)'))
                ->selectRaw('WEEK(created_at) as label, SUM(amount) as total_charge')
                ->get();

                $expenses = Expenses::where(
                    'branchid', '=', $branchid
                )
                ->groupBy(DB::raw('WEEK(created_at)'))
                ->selectRaw('WEEK(created_at) as label, SUM(amount) as total_expenses')
                ->get();

             return response()->json([
                'records' => $records,
                'charges'=>$charges,
                'expenses'=>$expenses,
                'message' => 'Transferred Successfully'
            ]);
        } else if ($period == 'Monthly') {
            $records = Records::where([
                ['status', '=','done'],
                ['branchid', '=',$branchid]
                ])
                ->groupBy(DB::raw('YEAR(created_at)'), DB::raw('MONTH(created_at)'))
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as label, SUM(sales) as total_sales')
                ->get();

                $charges = Charge::where([
                    ['branchid', '=', $branchid],
                    ['amount', '<>', null],
                ])
                ->groupBy(DB::raw('YEAR(created_at)'), DB::raw('MONTH(created_at)'))
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as label, SUM(amount) as total_charge')
                ->get();

                $expenses = Expenses::where(
                    'branchid', '=', $branchid
                )
                ->groupBy(DB::raw('YEAR(created_at)'), DB::raw('MONTH(created_at)'))
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as label, SUM(amount) as total_expenses')
                ->get();

                return response()->json([
                    'records' => $records,
                    'charges'=>$charges,
                    'expenses'=>$expenses,
                    'message' => 'Transferred Successfully'
                ]);
        } else if ($period == 'Annually') {
            $records = Records::where([
                ['status', '=','done'],
                ['branchid', '=',$branchid]
                ])
                ->groupBy(DB::raw('YEAR(created_at)'))
                ->selectRaw('YEAR(created_at) as label, SUM(sales) as total_sales')
                ->get();

                $charges = Charge::where([
                    ['branchid', '=', $branchid],
                    ['amount', '<>', null],
                ])
                ->groupBy(DB::raw('YEAR(created_at)'))
                ->selectRaw('YEAR(created_at) as label, SUM(amount) as total_charge')
                ->get();

                $expenses = Expenses::where(
                    'branchid', '=', $branchid
                )
                ->groupBy(DB::raw('YEAR(created_at)'))
                ->selectRaw('YEAR(created_at) as label, SUM(amount) as total_expenses')
                ->get();

                return response()->json([
                    'records' => $records,
                    'charges'=>$charges,
                    'expenses'=>$expenses,
                    'message' => 'Transferred Successfully'
                ]);
        }


    }
    public function get_record_of_the_day(Request $request)
    {
        // $industry = Industry::get();
        // $industry->each(function ($industry) {
        //     $countData = JobList::where('industry_id', $industry->id)->count();
        //     $industry->count = $countData??0;
        // });
        $record = Records::where([
            ['date', '=', $request->date],
            ['branchid', '=', $request->branchid],
            ['status', '=', 'done']
        ])->sum('sales');

        $record2 = BranchSelectaRecord::where([
            ['date', '=', $request->date],
            ['branchid', '=', $request->branchid],
        ])->sum('sales');

        $charge = Charge::where([
            ['date', '=', $request->date],
            ['branchid', '=', $request->branchid],
            ['amount', '<>', null],
        ])->sum('amount');

        $expenses = Expenses::where([
            ['branchid', '=', $request->branchid],
            ['date', '=', $request->date],
        ])->sum('amount');
        //     $industry->count = $countData??0;
        return response()->json([
            'sales' => $record + $record2,
            'charges' => $charge,
            'expenses' => $expenses,
            'message' => 'Transferred Successfully'
        ]);
    }
    public function search_record(Request $request)
    {
        $record = Records::where('date', '=', $request->date)
            ->where('status', '=', 'done')->get();
        return response()->json([
            'status' => $record,
            'message' => 'Transferred Successfully'
        ]);
    }
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
        $record = Records::where('id', '=', $request->id)->first();
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


        if ($request->remarks != "" || $request->remarks != null) {
            Remarks::create([
                'branchid' => $record->branchid,
                'userid' => $request->userid,
                'from' => 'Sales Report',
                'remarks' => $request->remarks,
            ]);
        }

        $a1 = 'Beginning from ' . $record->beginning . 'pcs to ' . $request->beginning . ' ';
        $a2 = 'New Production from ' . $record->new_production . 'pcs to ' . $request->new_production . ' ';
        $a3 = 'Charge from ' . $record->charge . 'pcs to ' . $request->charge . ' ';
        $a4 = 'Over from ' . $record->overs . 'pcs to ' . $request->overs . ' ';
        $a5 = 'Remaining from ' . $record->remaining . 'pcs to ' . $request->remaining . ' ';
        $a6 = 'Soldout from ' . $record->soldout . 'pcs to ' . $request->soldout . ' ';
        $a7 = 'Sales from ' . $record->sales . 'pcs to ' . $request->sales . ' ';
        History::create([
            'branchid' => $record->branchid,
            'userid' => $request->userid,
            'message' => 'updated the ' . $a1 . $a2 . $a3 . $a4 . $a5 . $a6 . $a7,
            'date' => $request->date
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }
    public function edit_bread_report_records(Request $request)
    {
        $record = Records::where('id', '=', $request->id)->first();
        Records::where('id', '=', $request->id)->update([
            'beginning' => $request->beginning,
            'charge' => $request->charge,
            'overs' => $request->overs,
            'total' => $request->beginning + $request->new_production,
        ]);
        if ($request->remarks != '' || $request->remarks != null) {
            Remarks::create([
                'branchid' => $record->branchid,
                'userid' => $request->userid,
                'from' => 'Bread Report',
                'remarks' => $request->remarks,
            ]);
        }

        History::create([
            'branchid' => $record->branchid,
            'userid' => $request->userid,
            'message' => 'updated the beginning from ' . $record->beginning . ' to ' . $request->beginning .
                ', charge from ' . $record->charge . ' to ' . $request->charge . ' and over from ' . $record->overs . ' from ' . $request->overs,
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }
    public function edit_bakers_report_records(Request $request)
    {
        $record = Records::where('id', $request->id)->first();

        Records::where('id', '=', $request->id)->update([
            'new_production' => $request->new_production
        ]);

        if ($request->remarks != '' || $request->remarks != null) {
            Remarks::create([
                'branchid' => $record->branchid,
                'userid' => $request->userid,
                'from' => 'Bakers Report',
                'remarks' => $request->remarks,
            ]);
        }
        History::create([
            'branchid' => $record->branchid,
            'userid' => $request->userid,
            'message' => 'updated the new production from ' . $record->new_production . ' to ' . $request->new_production,
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully'
        ]);
    }

    public function move_sales_records(Request $request)
    {
        $record = Records::where('id', '=', $request->id)->first();

        Records::create([
            'branchid' => $request->branchid,
            'breadid' => $request->breadid,
            'bakerid' => $request->bakerid,
            'sellerid' => $request->sellerid,
            'bread_out' => 0,
            'bread_name' => $request->bread_name,
            'price' => $request->price,
            'beginning' => $request->remaining == 0 ? 0 : $request->remaining,
            'new_production' => 0,
            'remaining' => 0,
            'soldout' => 0,
            'total' => $request->remaining == 0 ? 0 : $request->remaining,
            'charge' => 0,
            'overs' => 0,
            'sales' => 0,
            'status' => 'bread',
            'date' => $request->date,
        ]);

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
                'status' => $request->status,
                'date' => $request->date,
            ]);

        if ($request->remarks != "" || $request->remarks != null) {
            Remarks::create([
                'branchid' => $record->branchid,
                'userid' => $request->sellerid,
                'from' => 'Bread Report',
                'remarks' => $request->remarks,
            ]);
        }


        History::create([
            'branchid' => $record->branchid,
            'userid' => $request->sellerid,
            'message' => 'transferred ' . $record->bread_name . ' in Bread Report page with the remaining of ' . $request->remaining . 'pcs and breadout of ' . $request->bread_out . 'pcs',
            'date' => $request->date
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
                    $res = Records::where('id',$bread->id)
                    ->update([
                        'charge' => ($bread->charge ?? 0) + ($bakers->charge ?? 0),
                        'overs' => ($bread->overs ?? 0) + ($request->overs ?? 0),
                        'new_production' => ($bread->new_production ?? 0) + ($bakers->new_production ?? 0),
                        'total' => ($bakers->new_production ?? 0) + ($bread->total ?? 0),
                    ]);
                    if ($res) {
                        Records::where('id', $bakers->id)->delete();
                    }
                } else {
                    Records::where('id',$bakers->id)
                    ->update([
                        'overs' => $request->overs,
                        'status' => $request->moveTo,
                    ]);
                }
                if ($request->remarks != '' || $request->remarks != null) {
                    Remarks::create([
                        'branchid' => $request->breadid[$i],
                        'userid' => $request->userid,
                        'from' => 'Bakers Report',
                        'remarks' => $request->remarks,
                    ]);
                }

                History::create([
                    'branchid' => $request->breadid[$i],
                    'userid' => $request->userid,
                    'message' => 'transferred ' . $bakers->bread_name . 'in Bread Report page with the over of ' . $request->overs . 'pcs',
                    'date' => $request->date
                ]);
            }

        }
        return response()->json([
            'status' => 'success',
            'message' => 'Move successfully'
        ]);

    }



    public function get_records(Request $request)
    {

        if ($request->params == 'done') {
            $findBeginning = Records::where('branchid', $request->branchid)
                ->where('status', $request->params)
                ->where('date', $request->date)
                ->with('getBreads')
                ->get();
            return response()->json([
                'status' => $findBeginning,
            ]);
        } else {
            $findBeginning = Records::where('branchid', $request->branchid)
                ->where('status', $request->params)
                ->with('getBreads')
                ->get();
            return response()->json([
                'status' => $findBeginning,
            ]);
        }


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
            $bread = Breads::where('id', $request->data['selected_breads'][$i]['bread_id'])->first();
            $findBeginning = Records::where([
                ['breadid', '=', $request->data['selected_breads'][$i]['bread_id']],
                ['branchid', '=', $request->branchid],
                ['status', '=', 'bakers'],
            ])
                ->orderBy('id', 'DESC')
                ->first();

                if ($request->data['selected_breads'][$i]['targetPerBread'] > $request->data['selected_breads'][$i]['quantity']) {
                    Charge::create([
                        'branchid' => $request->branchid,
                        'breadid' => $request->data['selected_breads'][$i]['bread_id'],
                        'userid' => $request->account['id'],
                        'date'=>$request->date,
                        'amount'=>($request->data['selected_breads'][$i]['targetPerBread'] - $request->data['selected_breads'][$i]['quantity']) * $bread->price,
                        'quantity' => $request->data['selected_breads'][$i]['targetPerBread'] - $request->data['selected_breads'][$i]['quantity'],
                        'discription' => 'has charge ' . $request->data['selected_breads'][$i]['targetPerBread'] - $request->data['selected_breads'][$i]['quantity'].' with the price of '. $bread->price,
                        'type' => 'Charge'
                    ]);
                }
        
            if ($findBeginning) {
                Records::where('id', '=', $findBeginning->id)
                    ->update([
                        'branchid' => $request->branchid,
                        'breadid' => $request->data['selected_breads'][$i]['bread_id'],
                        'bakerid' => $request->account['id'],
                        'bread_name' => $request->data['selected_breads'][$i]['bread_name'],
                        'new_production' => $findBeginning->new_production + $request->data['selected_breads'][$i]['quantity'],
                        'total' => $findBeginning->new_production + $request->data['selected_breads'][$i]['quantity'],
                        'charge'=>$request->data['selected_breads'][$i]['targetPerBread'] - $request->data['selected_breads'][$i]['quantity'] + $findBeginning->quantity,
                        'remarks1' => 0,
                        'remarks2' => 0,
                        'date' => $request->date
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
                    'charge'=>$request->data['selected_breads'][$i]['targetPerBread'] - $request->data['selected_breads'][$i]['quantity'],
                    'remarks1' => 0,
                    'remarks2' => 0,
                    'date' => $request->date,
                ]);
            }
        }

       
        History::create([
            'branchid' => $request->branchid,
            'userid' => $request->account['id'],
            'message' => 'created ' . $request->created,
            'date' => $request->date
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Created Successfully'
        ]);
    }
}