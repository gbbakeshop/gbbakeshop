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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userid')->nullable();
            $table->bigInteger('branchid')->nullable();
            $table->string('am_in')->nullable();
            $table->string('am_out')->nullable();
            $table->string('pm_in')->nullable();
            $table->string('pm_out')->nullable();
            $table->string('am2_in')->nullable();
            $table->string('am2_out')->nullable();
            $table->string('pm2_in')->nullable();
            $table->string('pm2_out')->nullable();
            $table->string('date')->nullable();
            $table->string('date2')->nullable();
            $table->string('date3')->nullable();
            $table->string('total')->nullable();
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
        Schema::dropIfExists('attendances');
    }
};
