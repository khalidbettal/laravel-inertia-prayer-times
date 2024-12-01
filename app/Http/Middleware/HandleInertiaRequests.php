<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }
    

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
                $error = 'Something went wrong, check your internet connection';
            }
        } catch (\Exception $e) {
            $error = 'Something went wrong, check your internet connection';
        }

        return $cities['cities'] ?? [];
    }


    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'cities' => $this->getCities()
        ]);
    }
   
   
}
