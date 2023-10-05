<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/administrator/dashboard', function () {
//     return Inertia::render('administrator/page');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/administrator/dashboard', function () {
        return Inertia::render('administrator/page');
    })->name('dashboard');
 
    Route::get('/administrator/auth/breads', function () {
        return Inertia::render('breads/page');
    })->name('breads');

    Route::get('/administrator/auth/recipes', function () {
        return Inertia::render('recipes/page');
    })->name('recipes');
    Route::get('/administrator/auth/ingredients', function () {
        return Inertia::render('ingredients/page');
    })->name('ingredients');

    Route::get('/administrator/auth/selecta', function () {
        return Inertia::render('selecta/page');
    })->name('selecta');

    Route::get('/administrator/auth/accounts', function () {
        return Inertia::render('accounts/page');
    })->name('accounts');

    Route::get('/administrator/auth/raw_materials', function () {
        return Inertia::render('raw_materials/page');
    })->name('raw_materials');

    Route::get('/administrator/{branchid}/branch_raw_materials', function () {
        return Inertia::render('branch_raw_materials/page');
    })->name('branch_raw_materials');

    Route::get('/administrator/{branchid}/branch_bakers_production', function () {
        return Inertia::render('branch_bakers_production/page');
    })->name('branch_bakers_production');

    Route::get('/administrator/{branchid}/branch_bakers_report', function () {
        return Inertia::render('branch_bakers_report/page');
    })->name('branch_bakers_report');

    Route::get('/administrator/{branchid}/branch_bread_report', function () {
        return Inertia::render('branch_bread_report/page');
    })->name('branch_bread_report');

    Route::get('/administrator/{branchid}/branch_sales_report', function () {
        return Inertia::render('branch_sales_report/page');
    })->name('branch_sales_report');

    Route::get('/administrator/{branchid}/branch_selecta', function () {
        return Inertia::render('branch_selecta/page');
    })->name('branch_selecta');

    Route::get('/administrator/{branchid}/branch_accounts', function () {
        return Inertia::render('branch_accounts/page');
    })->name('branch_accounts');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
