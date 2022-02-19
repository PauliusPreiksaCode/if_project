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

//mix.ts('resources/js/startuolis/mainGame.ts', 'public/js/mainGame.js');
//mix.ts('resources/js/startuolis/startuolis.ts', 'public/js/startuolis.js');
mix.ts('resources/js/kel.ts', 'public/js/kel.js');
mix.ts('resources/js/startuolis/startuolis.ts', 'public/js/startuolis.js');
