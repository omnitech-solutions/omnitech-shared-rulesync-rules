<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaxController;

Route::post('/taxes/calculate', [TaxController::class, 'calculate']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
