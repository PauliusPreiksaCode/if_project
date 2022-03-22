<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStartuolisLevelEffectUpgrades extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startuolis_level_effect_upgrades', function (Blueprint $table) {
            $table->id();
            $table->integer('protas');
            $table->integer('kompiuteris');
            $table->integer('draugai');
            $table->integer('programavimas');
            $table->integer('patalpos');
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
        Schema::dropIfExists('startuolis_level_effect_upgrades');
    }
}
