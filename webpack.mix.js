const mix = require('laravel-mix');

mix.options({
    processCssUrls: true,
    terser: {
        terserOptions: {
            output: {
                comments: false,
            },
        },
        extractComments: false,
    }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/index.tsx', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ]);
