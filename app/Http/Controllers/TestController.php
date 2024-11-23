<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {  
        $city = 'Casablanca';
        $country = 'Morocco';
        $prayerData = [];
        $error = null;
    
        try {
            $response = Http::get("https://api.aladhan.com/v1/timingsByCity", [
                'city' => $city,
                'country' => $country,
            ]);   
    
            if ($response->successful()) {
                $prayerData = $response->json();
            } else {
                $error = 'City not found or invalid response from API';
            }
        } catch (\Exception $e) {
            $error = 'Something went wrong, check your internet connection';
        }
    
        return Inertia::render('Home', [
            'prayerTimes' => $prayerData['data']['timings'] ?? [],
            'date' => $prayerData['data']['date']['gregorian']['date'] ?? '',
            'country' => $prayerData['data']['meta']['method']['name'] ?? $country,
            'city' => $city,
            'error' => $error,
        ]);
    }
    

    public function show(Request $request)
    {
        $city = $request->city;
        $country = $request->city;
        $prayerData = [];
        $error = null;

        try {
            $response = Http::get("https://api.aladhan.com/v1/timingsByCity", [
                'city' => $city,
                'country' => $country,
            ]);   
    
            if ($response->successful()) {
                $prayerData = $response->json();
            } else {
                $error = ('City of "'.$city.'" not found please try again');  ;
            }
        } catch (\Exception $e) {
            $error = 'Something went wrong, check your internet connection';
        }
    
         return Inertia::render('Prayer', [
            'prayerTimes' => $prayerData['data']['timings'] ?? [],
            'date' => $prayerData['data']['date']['gregorian']['date'] ?? '',
            'country' => $prayerData['data']['meta']['method']['name'] ?? $country,
            'city' => $city,
            'error' => $error,

            // dd($request->city)
         ]);
    }
}
