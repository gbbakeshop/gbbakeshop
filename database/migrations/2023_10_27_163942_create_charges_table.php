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
        Schema::create('charges', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('branchid')->nullable();
            $table->bigInteger('userid')->nullable();
            $table->bigInteger('breadid')->nullable();
            $table->bigInteger('quantity')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->string('discription')->nullable();
            $table->string('type')->nullable();
            $table->string('date')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('charges');
    }
};
