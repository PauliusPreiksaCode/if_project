<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class answer extends Controller
{
    //
    public function show()
    {
        $answers = DB::select('select * from answer');
        return View::make('kel')->with('answers', $answers);;
    }
}
