<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use App\Models\SelectedBreads;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RecipesController extends Controller
{
    public function generateRandomToken()
    {
        // Generate a random integer token with the specified length
        $random = mt_rand(1000000000000000, 9999999999999999);
        return $random;
    }

    public function get_all_recipes(){
        $response = Recipes::with(['selectedBreads','selectedIngredients','ingredientsData'])->get();
        return response()->json([
            'status' => $response
        ]);
    }
    public function create_recipes(Request $request){

        $token = $this->generateRandomToken();
        $response = Recipes::create([
            'selected_breads_token'=>$token,
        ]);
        for ($i=0; $i < count($request->data); $i++) { 
            SelectedBreads::create([
                'bread_id'=>$request->data[$i]['bread_id'],
                'bread_name'=>$request->data[$i]['bread_name'],
                'token'=>$token,
            ]);
        }
        
        if($response){
            return response()->json([
                'status' => 'success',
                'message' => 'Created Successfully'
            ]);
        }
       
    }
}
