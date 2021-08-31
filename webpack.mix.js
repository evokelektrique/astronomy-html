const mix = require('laravel-mix');

mix.setPublicPath('public/')
mix.setResourceRoot('../')
mix.sass('resources/styles/app.scss', 'public/css')
mix.js('resources/scripts/app.js', 'public/js')
