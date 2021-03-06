<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible"
          content="ie=edge">

    <meta name="robots" content="noindex,nofollow" />

    <link rel="stylesheet"
          href="{{ mix('css/app.css') }}">
    <title>{{ config('app.name') }}</title>
</head>
<body>
    <div id="app" class="container mx-auto px-8"></div>
    <script src="{{ mix('js/index.js') }}"></script>
</body>
</html>
