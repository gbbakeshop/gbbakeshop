<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::get('/get_all_accounts','App\Http\Controllers\AccountsController@get_all_accounts');
Route::delete('/delete_accounts/{id}','App\Http\Controllers\AccountsController@delete_accounts');
Route::get('/get_branch_accounts/{branchid}','App\Http\Controllers\AccountsController@get_branch_accounts');
Route::post('/register_accounts','App\Http\Controllers\AccountsController@register_accounts');
Route::get('/get_specific_accounts/{id}','App\Http\Controllers\AccountsController@get_specific_accounts');
Route::put('/update_personal_information','App\Http\Controllers\AccountsController@update_personal_information');
Route::put('/update_personal_credentials','App\Http\Controllers\AccountsController@update_personal_credentials');

Route::get('/get_all_branches','App\Http\Controllers\BranchesController@get_all_branches');

Route::get('/get_all_breads','App\Http\Controllers\BreadsController@get_all_breads');
Route::post('/create_breads','App\Http\Controllers\BreadsController@create_breads');
Route::delete('/delete_breads/{id}','App\Http\Controllers\BreadsController@delete_breads');
Route::put('/update_breads','App\Http\Controllers\BreadsController@update_breads');

Route::get('/get_all_raw_materials','App\Http\Controllers\RawMaterialsController@get_all_raw_materials');
Route::put('/edit_raw_materials','App\Http\Controllers\RawMaterialsController@edit_raw_materials');
Route::delete('/delete_raw_materials/{id}','App\Http\Controllers\RawMaterialsController@delete_raw_materials');
Route::post('/create_raw_materials','App\Http\Controllers\RawMaterialsController@create_raw_materials');

Route::get('/get_branch_raw_materials/{branchid}','App\Http\Controllers\BranchRawMaterialsController@get_branch_raw_materials');
Route::put('/edit_branch_raw_materials','App\Http\Controllers\RawMaterialsController@edit_branch_raw_materials');

Route::get('/get_all_recipes','App\Http\Controllers\RecipesController@get_all_recipes');
Route::post('/create_recipes','App\Http\Controllers\RecipesController@create_recipes');

// Route::get('/get_branch_recipes/{branchid}','App\Http\Controllers\RecipesController@get_branch_recipes');

Route::get('/get_all_selecta','App\Http\Controllers\SelectaController@get_all_selecta');

Route::get('/get_branch_selecta/{branchid}','App\Http\Controllers\BranchSelectaController@get_branch_selecta');

Route::get('/get_all_ingredients','App\Http\Controllers\IngredientsController@get_all_ingredients');
Route::post('/create_ingredients','App\Http\Controllers\IngredientsController@create_ingredients');
Route::delete('/delete_ingredients/{id}','App\Http\Controllers\IngredientsController@delete_ingredients');
Route::put('/update_ingredients','App\Http\Controllers\IngredientsController@update_ingredients');


Route::delete('/delete_selected_ingredients/{id}','App\Http\Controllers\SelectedIngredientsController@delete_selected_ingredients');
Route::post('/add_selected_ingredients','App\Http\Controllers\SelectedIngredientsController@add_selected_ingredients');
Route::post('/add_recipe_ingredients','App\Http\Controllers\SelectedIngredientsController@add_recipe_ingredients');
Route::put('/change_recipe_ingredients','App\Http\Controllers\SelectedIngredientsController@change_recipe_ingredients');

Route::post('/create_new_records','App\Http\Controllers\RecordsController@create_new_records');
Route::post('/get_records','App\Http\Controllers\RecordsController@get_records');
Route::post('/move_records','App\Http\Controllers\RecordsController@move_records');
Route::post('/move_sales_records','App\Http\Controllers\RecordsController@move_sales_records');
Route::put('/edit_bakers_report_records','App\Http\Controllers\RecordsController@edit_bakers_report_records');
Route::put('/edit_bread_report_records','App\Http\Controllers\RecordsController@edit_bread_report_records');
Route::put('/edit_sales_report_records','App\Http\Controllers\RecordsController@edit_sales_report_records');
Route::put('/record_move_another_branch','App\Http\Controllers\RecordsController@record_move_another_branch');
Route::post('/search_record','App\Http\Controllers\RecordsController@search_record');











