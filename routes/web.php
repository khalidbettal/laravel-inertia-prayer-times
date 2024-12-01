<?php

use App\Http\Controllers\PrayerController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;
use PHPUnit\Event\Code\Test;

Route::get('/', function () {
    return Inertia::render('Main');
});
Route::get('/prayer-times/{city}', [PrayerController::class, 'show'])->name('prayer.show');

Route::get('/test', [TestController::class, 'index']);

