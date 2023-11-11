<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branch_selectas', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('branchid')->nullable();
            $table->bigInteger('selectaid')->nullable();
            $table->string('product_name')->nullable();
            $table->float('quantity')->nullable();
            $table->float('price')->nullable();
            $table->string('warning')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branch_selectas');
    }
};
