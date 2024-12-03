<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class CityService
{
    public function getCities()
{
    $cities = [];
    $error = null;

    try {
        $randomPage = rand(1, 1000);
        $response = Http::get("https://api.thecompaniesapi.com/v2/locations/cities?page={$randomPage}");

        if ($response->successful()) {
            $cities = $response->json();
        } else {
            $error = 'API returned an unsuccessful response.';
            Log::error('City API Error: ' . $response->status());
        }
    } catch (\Exception $e) {
        $error = 'Something went wrong, check your internet connection.';
        Log::error('City API Exception: ' . $e->getMessage());
    }

    if ($error) {
        Log::error($error);
    }

    return $cities['cities'] ?? [];
}
}