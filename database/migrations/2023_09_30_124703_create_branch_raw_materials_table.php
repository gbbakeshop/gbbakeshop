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
        Schema::create('branch_raw_materials', function (Blueprint $table) {
            $table->id();
            $table->string('branchid')->nullable();
            $table->string('raw_materials')->nullable();
            $table->bigInteger('raw_materials_id')->nullable();
            $table->float('quantity')->nullable();
            $table->string('bind')->nullable();
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
        Schema::dropIfExists('branch_raw_materials');
    }
};
