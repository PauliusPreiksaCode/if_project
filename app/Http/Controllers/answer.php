<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class answer extends Controller
{
    //
    public function show()
    {
        return DB::select('select * from answer');
    }
}
