module.exports = function exports() {
    'use strict';

    var config;

    config = {
        // Пути откуда брать исходники
        src: {
            // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            html: 'src/*.html',
            // В стилях и скриптах нам понадобятся только main файлы
            js: 'src/js/main.js',
            alljs: 'src/**/!(*.min)+(.js)',
            style: 'src/style/main.css',
            // Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*',
            templates: 'src/js/**/*.tmpl.html'
        },
        // Тут мы укажем куда складывать готовые после сборки файлы
        build: {
            html: '.build/',
            js: '.build/js/',
            css: '.build/css/',
            img: '.build/img/',
            fonts: '.build/fonts/',
            templates: '.tmp/tempjs'
        },
        // Тут мы указываем, какую папку чистить
        clean: {
            build: './.build',
            tmp: './.tmp'
        },
        // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        watch: {
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.css',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        // Для запуска браузера локально и синхронизации с исходниками
        browserSync: {
            // proxy: 'aavto.local.dev',
            proxy: 'http://localhost:3000',
            files: ['./.build/**/*.*'],
            port: 5000
        },
        nodemon: {
            script: './bin/www'
        },
        templateCache: {
            filename: 'templates.js',
            options: {
                base: '',
                module: 'aAvto.webui',
                standalone: false,
                templateHeader: '//templates\r\nangular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {',
                templateFooter: '}]);'
            }
        }
    };

    return config;
};


