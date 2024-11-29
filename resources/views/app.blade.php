<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }} "  class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="p36fU7Wlc9jDb_wYPu-SeUsRcbuDUIahYGCAtFAJ3jg" />

        <title inertia>{{ config('app.name', 'PrayerTi') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- favicon -->
        <link rel="icon" href="{{ asset('prayer.ico') }}" type="image/x-icon">
        
        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
	<body class="bg-white dark:bg-gray-800 container mx-auto p-4">
        @inertia
    </body>
</html>