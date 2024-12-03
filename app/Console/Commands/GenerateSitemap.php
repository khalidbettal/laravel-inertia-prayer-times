<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // $baseUrl = config('app.url'); // Dynamically fetch APP_URL

        //    // The Crawler
        //    SitemapGenerator::create($baseUrl)
        //    ->hasCrawled(function (Url $url) {
        //        // Some logic here
        //        return $url;
        //    })
        //    ->writeToFile(public_path('sitemap.xml'));
   }

    }

