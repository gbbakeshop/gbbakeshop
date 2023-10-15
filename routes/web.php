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
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
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


    Route::get('/branch/dashboard', function () {
        return Inertia::render('branch/dashboard');
    })->name('b_dashboard');
    
    Route::get('/branch/raw-materials', function () {
        return Inertia::render('branch/raw-materials');
    })->name('b_raw_materials');

    Route::get('/branch/bakers-report', function () {
        return Inertia::render('branch/bakers-report');
    })->name('b_bakers_report');

    Route::get('/branch/bread-report', function () {
        return Inertia::render('branch/bread-report');
    })->name('b_bread_report');

    Route::get('/branch/sales-report', function () {
        return Inertia::render('branch/sales-report');
    })->name('b_sales_report');

    Route::get('/branch/bread-production', function () {
        return Inertia::render('branch/bread-production');
    })->name('b_bread_production');
    
    Route::get('/branch/selecta', function () {
        return Inertia::render('branch/selecta');
    })->name('b_selecta');

    Route::get('/branch/settings', function () {
        return Inertia::render('branch/settings');
    })->name('b_settings');
});

Route::middleware('auth')->group(function () {
    Route::get('/administrator/settings', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/administrator/settings', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/administrator/settings', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';