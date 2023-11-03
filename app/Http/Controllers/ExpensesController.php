<?php

namespace App\Http\Controllers;

use App\Models\Expenses;
use App\Models\UploadImage;
use Illuminate\Http\Request;

class ExpensesController extends Controller
{

    public function get_branch_expenses($branchid){
        $expenses = Expenses::where('branchid',$branchid)->with('uploadImage')->get();
        return response()->json([
            'status' => $expenses,
        ]);
    }
    public function create_expenses(Request $request){
      
        $expenses = Expenses::create([
            'branchid' =>$request->branchid,
            'name' =>$request->name,
            'quantity' =>$request->quantity,
            'quantity_type' =>$request->quantity_type,
            'amount' =>$request->amount,
            'discription' =>$request->discription,
            'date' =>$request->date,
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('images', $imageName, 'public'); 
                UploadImage::create([
                    'expenses_id'=>$expenses->id,
                    'file_name'=> $imageName
                ]);
            }
        } 

            return response()->json([
                'status' => 'success',
                'message' => 'Created Successfully'
            ]);
       
    }
}
