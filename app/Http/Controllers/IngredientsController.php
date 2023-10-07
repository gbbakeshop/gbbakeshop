<?php

namespace App\Http\Controllers;

use App\Models\Ingredients;
use App\Models\RawMaterials;
use App\Models\Recipes;
use App\Models\SelectedIngredients;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class IngredientsController extends Controller
{
    public function generateRandomToken()
    {
        // $randomToken = Str::random(32);
        // return $randomToken;
        $random = mt_rand(1000000000000000, 9999999999999999);
        return $random;
    }

    public function delete_ingredients($id)
    {
        $exist = Ingredients::where('id', $id)->first();
        Ingredients::where('id', $id)->delete();
        SelectedIngredients::where('token', '=', $exist->selected_ingredients_token)->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Delete Successfully'
        ]);

    }
    public function get_all_ingredients()
    {
        $response = Ingredients::with('selectedIngredients')->get();
        return response()->json([
            'status' => $response
        ]);

    }

    public function create_ingredients(Request $request)
    {
        $bread = Ingredients::where('code', $request->code)->first();
        $token = $this->generateRandomToken();
        if ($bread == null) {
            Ingredients::create([
                'code' => $request->code,
                'selected_ingredients_token' => $token,
                'target' => $request->target
            ]);
            for ($i = 0; $i < count($request->ingredients); $i++) {
                SelectedIngredients::create([
                    'token' => $token,
                    'raw_materials_id' => $request->ingredients[$i]['raw_materials']['id'],
                    'raw_materials' => $request->ingredients[$i]['raw_materials']['raw_materials'],
                    'quantity' => $request->ingredients[$i]['quantity'],
                    'bind' => 'Grams',
                ]);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Successfully created!'
            ]);
        } else {
            return response()->json([
                'status' => 'exist',
                'message' => 'Bread is already exist!'
            ]);
        }


    }



    public function update_ingredients(Request $request)
    {
        $bread = Ingredients::where('id', $request->id)->first();
        $se = SelectedIngredients::where('token', $bread->selected_ingredients_token)->get();


        Recipes::where('selected_ingredients_token', $bread->selected_ingredients_token)->update([
            'target' => $request->target
        ]);
        if ($bread->code == $request->code) {
            Ingredients::where('id', $request->id)->update([
                'code' => $request->code,
                'target' => $request->target
            ]);
            for ($i = 0; $i < count($request->ingredients); $i++) {
                $new = RawMaterials::where('id', '=', $request->ingredients[$i]['raw_materials'])->first();
                $exist2 = SelectedIngredients::where('raw_materials_id', '=', $request->ingredients[$i]['raw_materials'])->first();
                if ($exist2 == null) {
                    SelectedIngredients::where('id', '=', $se[$i]->id)->update([
                        'raw_materials_id' => $new->id,
                        'raw_materials' => $new->raw_materials,
                        'quantity' => $request->ingredients[$i]['quantity'],
                        'bind' => 'Grams',
                    ]);
                }else{
                    SelectedIngredients::where('id', '=', $se[$i]->id)->update([
                        'quantity' => $request->ingredients[$i]['quantity']
                    ]);
                }

            }
            return response()->json([
                'status' => 'success',
                'message' => 'Successfully created!'
            ]);
        } else {
            $exist = Ingredients::where('code', '=', $request->code)->first();
            if ($exist == null) {
                Ingredients::where('id', '=', $request->id)->update([
                    'code' => $request->code,
                    'target' => $request->target
                ]);
                for ($i = 0; $i < count($request->ingredients); $i++) {
                    $new = RawMaterials::where('id', '=', $request->ingredients[$i]['raw_materials'])->first();
                    $exist2 = SelectedIngredients::where('raw_materials_id', '=', $request->ingredients[$i]['raw_materials'])->first();
                    if ($exist2 == null) {
                        SelectedIngredients::where('id', '=', $se[$i]->id)->update([
                            'raw_materials_id' => $new->id,
                            'raw_materials' => $new->raw_materials,
                            'quantity' => $request->ingredients[$i]['quantity'],
                            'bind' => 'Grams',
                        ]);
                    }else{
                        SelectedIngredients::where('id', '=', $se[$i]->id)->update([
                            'quantity' => $request->ingredients[$i]['quantity']
                        ]);
                    }
                }
                return response()->json([
                    'status' => 'success',
                    'message' => 'Successfully created!'
                ]);
            } else {
                return response()->json([
                    'status' => 'exist',
                    'message' => 'Bread is already exist!'
                ]);
            }
        }

    }
}