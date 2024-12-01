<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {  

        $cities = [];
        $error = null;
        try {
            $response = Http::get("https://api.thecompaniesapi.com/v2/locations/cities");

            if ($response->successful()) {
                $cities = $response->json();
            }else {
                $error = 'Something went wrong, check your internet connection';
            }
        } catch (\Exception $e) {
            $error = 'Something went wrong, check your internet connection';
        }

        
    }
}
