<?php

namespace App\Http\Middleware;

use App\Services\CityService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
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
        $service = new CityService();
        return $service->getCities();
    }
 



    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'cities' => $this->getCities(),
        ]);
    }
   
   
}
