<?php

use App\Http\Controllers\PrayerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;


Route::get('/prayer-times/{city}', [PrayerController::class, 'show'])->name('prayer.show');

