<?php

use App\Http\Controllers\Auth\RegisteredUserController;
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

    //controls
    Route::group(['prefix' => 'administrator/controls'], function () {
        // Route::get('/', function () {
        //     return Inertia::render('administrator/page');
        // })->name('controls');

        Route::get('breads', function () {
            return Inertia::render('breads/page');
        })->name('breads');

        Route::get('recipes', function () {
            return Inertia::render('recipes/page');
        })->name('recipes');

        Route::get('ingredients', function () {
            return Inertia::render('ingredients/page');
        })->name('ingredients');

        Route::get('selecta', function () {
            return Inertia::render('selecta/page');
        })->name('selecta');

        Route::get('accounts', function () {
            return Inertia::render('accounts/accounts');
        })->name('accounts');


        Route::get('registration', function () {
            return Inertia::render('accounts/registration');
        })->name('registration');


        Route::get('raw_materials', function () {
            return Inertia::render('raw_materials/page');
        })->name('raw_materials');
    });

    //

    Route::group(['prefix' => 'administrator'], function () {
        Route::get('/', function () {
            return Inertia::render('branches/page');
        })->name('branches');


        Route::get('{branchid}/analytics', function () {
            return Inertia::render('branch_analytics/page');
        })->name('branch_analytics');

        Route::get('{branchid}/raw_materials', function () {
            return Inertia::render('branch_raw_materials/page');
        })->name('branch_raw_materials');

        Route::get('{branchid}/expenses', function () {
            return Inertia::render('branch_expenses/page');
        })->name('branch_expenses');

        Route::get('{branchid}/attendance', function () {
            return Inertia::render('branch_attendance/page');
        })->name('branch_attendance');

        Route::get('{branchid}/bakers_production', function () {
            return Inertia::render('branch_bakers_production/page');
        })->name('branch_bakers_production');

        Route::get('{branchid}/bakers_report', function () {
            return Inertia::render('branch_bakers_report/page');
        })->name('branch_bakers_report');

        Route::get('{branchid}/bread_report', function () {
            return Inertia::render('branch_bread_report/page');
        })->name('branch_bread_report');

        Route::get('{branchid}/sales_report', function () {
            return Inertia::render('branch_sales_report/page');
        })->name('branch_sales_report');

        Route::get('{branchid}/selecta', function () {
            return Inertia::render('branch_selecta/page');
        })->name('branch_selecta');

        Route::get('{branchid}/selecta/records', function () {
            return Inertia::render('branch_selecta/page_records');
        })->name('branch_selecta_records');

        Route::get('{branchid}/selecta/history', function () {
            return Inertia::render('branch_selecta/page_history');
        })->name('branch_selecta_history');


        Route::group(['prefix' => '{branchid}/accounts'], function () {
            Route::get('/', function () {
                return Inertia::render('branch_accounts/page');
            })->name('branch_accounts');


            Route::get('{userid}/expenses', function () {
                return Inertia::render('account_expenses/page');
            })->name('account_expenses');

            Route::get('{userid}/history', function () {
                return Inertia::render('account_history/page');
            })->name('account_history');

            Route::get('{userid}/settings', function () {
                return Inertia::render('account_settings/page');
            })->name('account_settings');

            Route::get('{userid}/attendance', function () {
                return Inertia::render('account_attendance/page');
            })->name('account_attendance');

        });


        Route::get('{branchid}/history', function () {
            return Inertia::render('branch_history/page');
        })->name('branch_history');
    });



    Route::get('/administrator/chats', function () {
        return Inertia::render('breads/page');
    })->name('chats');



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

    Route::get('/branch/history', function () {
        return Inertia::render('branch/branch_sales_history');
    })->name('b_history');

    Route::get('/branch/selecta', function () {
        return Inertia::render('branch/selecta');
    })->name('b_selecta');

    Route::get('/branch/selecta_records', function () {
        return Inertia::render('branch/selecta_records');
    })->name('b_selecta_records');

    Route::get('/branch/selecta_history', function () {
        return Inertia::render('branch/selecta_history');
    })->name('b_selecta_history');

    Route::get('/branch/settings', function () {
        return Inertia::render('branch/settings');
    })->name('b_settings');

    Route::get('/branch/branch_attendance', function () {
        return Inertia::render('branch/branch-attendance');
    })->name('b_branch_attendance');


    Route::get('/branch/credits', function () {
        return Inertia::render('branch/account-credits');
    })->name('b_credits');

    Route::get('/branch/logs', function () {
        return Inertia::render('branch/account-logs');
    })->name('b_logs');

    Route::get('/branch/attendance', function () {
        return Inertia::render('branch/account-attendance');
    })->name('b_attendance');

    Route::get('/branch/expenses', function () {
        return Inertia::render('branch/account-expenses');
    })->name('b_expenses');

});

Route::middleware('auth')->group(function () {
    Route::get('/administrator/settings', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/administrator/settings', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/administrator/settings', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
});



// Route::any('/{page?}', function () {
//     return Inertia::render('_components/error404');
// })->where('page', '.*');

require __DIR__ . '/auth.php';