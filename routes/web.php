<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/game', function () {
    return view('game');
});
Route::get('/apie', function () {
    return view('apie');
});
Route::get('/p', function () {
    return view('p');
});
Route::get('/n', function () {
    return view('n');
});
Route::get('/a', function () {
    return view('a');
});
Route::get('/kel', function () {
    return view('kel');
});
Route::get('/button', [\App\Http\Controllers\startuolis_button_controller::class, 'show']);
Route::get('/question', [\App\Http\Controllers\question::class, 'show']);
Route::get('/answer', [\App\Http\Controllers\answer::class, 'show']);
Route::get('/info', [\App\Http\Controllers\info::class, 'show']);
Route::get('/picture', [\App\Http\Controllers\picture::class, 'show']);

