<?php

use App\Http\Controllers\PrayerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', [PrayerController::class, 'index'])->name('home');

Route::get('/prayer/{city}', [PrayerController::class, 'show'])->name('prayer.show');

Route::get('/test{city}', function (Request $request) {
    return Inertia::render('Test', [
        'city' => $request->city
    ]);
})->name('test');