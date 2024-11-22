<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        $response = Http::get('https://api.aladhan.com/v1/timingsByCity/%7Bdate%7D?city=Youssoufia&country=Morocco');
        $prayerData = $response->json();
        // dd($prayerData['data']['meta']['method']['name']);
        return Inertia::render('Home', [
            'prayerTimes' => $prayerData['data']['timings'],
            'date' => $prayerData['data']['date']['gregorian']['date'],
            'country' => $prayerData['data']['meta']['method']['name'],
            'city' => 'Youssoufia', 
        ]);
    }

    public function show(Request $request)
    {
         $city = $request->city;
         return Inertia::render('Test', [
             dd($city)
         ]);
    }
}
