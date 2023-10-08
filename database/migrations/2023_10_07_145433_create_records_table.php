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
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('branchid')->nullable();
            $table->bigInteger('breadid')->nullable();
            $table->bigInteger('bakerid')->nullable();
            $table->bigInteger('sellerid')->nullable();
            $table->string('bread_name')->nullable();
            $table->float('price')->nullable();
            $table->bigInteger('beginning')->nullable();
            $table->bigInteger('new_production')->nullable();
            $table->bigInteger('remaining')->nullable();
            $table->bigInteger('soldout')->nullable();
            $table->bigInteger('bread_out')->nullable();
            $table->bigInteger('total')->nullable();
            $table->float('charge')->nullable();
            $table->float('overs')->nullable();
            $table->float('sales')->nullable();
            $table->string('status')->nullable();
            $table->string('remarks1')->nullable();
            $table->string('remarks2')->nullable();
            $table->string('date')->nullable();
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
        Schema::dropIfExists('records');
    }
};
