<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStartuolisChoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startuolis_choices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('button_id')->references('id')->on('startuolis_buttons');
            //$table->id('button_id');
            $table->string('name');
            $table->integer('level');
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
        Schema::dropIfExists('startuolis_choices');
    }
}
