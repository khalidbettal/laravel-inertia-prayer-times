<?php

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Http\Controllers\PrayerController;
use App\Services\CityService;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;
use PHPUnit\Event\Code\Test;

Route::get('/', function () {
    return Inertia::render('Main');
});
Route::get('/prayer-times/{city}', [PrayerController::class, 'show'])->name('prayer.show');

// Route::get('/test', [TestController::class, 'index']);


Route::get('/sitemap.xml', function (CityService $service) {
    $baseUrl = config('app.url'); // Dynamically fetch APP_URL
    $sitemap = Sitemap::create($baseUrl)
        ->add(Url::create('/')->setPriority(1.0)->setChangeFrequency('daily'));

    // Fetch cities using the controller's getCities method
    $cities = $service->getCities();

    foreach ($cities as $city) {
        $sitemap->add(
            Url::create("$baseUrl/prayer-times/{$city['name']}")
                ->setPriority(0.8)
                ->setChangeFrequency('hourly')
        );
    }

    return $sitemap->toResponse(request());
});
