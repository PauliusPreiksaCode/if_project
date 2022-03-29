<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class picture extends Controller
{
    //
    public function show()
    {
        return DB::select('select * from picture');
    }
}
