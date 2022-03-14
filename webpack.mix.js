const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.ts('resources/js/kel.ts', 'public/js/kel.js');
mix.ts('resources/js/Startuolis/MainTS.ts', 'public/js/MainTS.js');
mix.ts('resources/js/Startuolis/Scenes/MainGame.ts', 'public/js/MainGame.js');
mix.ts('resources/js/Startuolis/Scenes/GameStart.ts', 'public/js/GameStart.js');

