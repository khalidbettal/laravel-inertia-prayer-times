<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function show(Request $request)
    {
         $city = $request->city;
         return Inertia::render('Test', [
             dd($city)
         ]);
    }
}
