module.exports = function exports() {
    'use strict';    

    var config = {
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'src/style/main.css',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/'
        },
        clean: './build', // Тут мы указываем, какую папку чистить
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.css',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        browserSync:{  // Для запуска браузера локально и синхронизации с исходниками
            server: {
                baseDir: "./build"
            },
            tunnel: true,
            host: 'localhost',
            port: 3000
        },
        nodemon: { script: 'index.js' }
    };

    return config;    
};

