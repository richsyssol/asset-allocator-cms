<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroController;



Route::get('api/hero-items', [HeroController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});
