<?php

namespace App\Http\Controllers;

use App\Models\RawMaterials;
use App\Models\SelectedIngredients;
use App\Models\RawMaterialsController;
use Illuminate\Http\Request;

class SelectedIngredientsController extends Controller
{
    public function delete_selected_ingredients($id)
    {
        SelectedIngredients::where('id', $id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully deleted!'
        ]);
    }

    public function add_selected_ingredients(Request $request)
    {
        // SelectedIngredients::where('id',$id)->delete();
        $rm = RawMaterials::where('id',$request->raw_materials_id)->first();
        $exist = SelectedIngredients::where([['token', '=', $request->token], ['raw_materials_id', '=', $request->raw_materials_id]])->first();
        if ($exist == null) {
            SelectedIngredients::create([
                'token' =>$request->token,
                'raw_materials_id' =>$request->raw_materials_id,
                'raw_materials' =>$rm->raw_materials,
                'quantity' =>$request->quantity
            ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully added!'
        ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Ingredients is already exist!'
            ]);
        }

    }
}