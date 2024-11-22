<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', [TestController::class, 'index']);

Route::get('/test/{city}', [TestController::class, 'show'])->name('test.show');