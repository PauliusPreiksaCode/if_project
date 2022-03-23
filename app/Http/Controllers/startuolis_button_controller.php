<?php

namespace App\Http\Controllers;

use App\Models\startuolis_button;
use Illuminate\Http\Request;



class startuolis_button_controller extends Controller
{
    public function show()
    {
        $button = startuolis_button::all();
        dd($button[0]->Effect[0]->id);
        //istraukiam is DB viska ko reikia ir pasidarom masyva
        //paverciam rezultatus i JSON naudojant encode funk
        // tą kintamąjį gražinam


        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA',
        ]);
    }
}
