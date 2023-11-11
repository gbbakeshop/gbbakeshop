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
        Schema::create('dominations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('branchid')->nullable();
            $table->bigInteger('bills')->nullable();
            $table->bigInteger('pcs')->nullable();
            $table->bigInteger('total')->nullable();
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
        Schema::dropIfExists('dominations');
    }
};
