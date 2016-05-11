'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    importCss = require('gulp-import-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    sequence = require('gulp-sequence'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon'),
    config = require('./gulp.config.js')();

gulp.task('html:build', function () {
    gulp.src(config.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(config.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    gulp.src(config.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        // .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(config.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('style:build', function () {
    gulp.src(config.src.style) //Выберем наш main.css
        .pipe(importCss())
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(prefixer()) //Добавим вендорные префиксы
        // .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.css)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(config.src.img) //Выберем наши картинки
        // .pipe(imagemin({ //Сожмем их
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(config.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([config.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([config.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([config.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([config.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([config.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config.browserSync);
});

gulp.task('clean', function (cb) {
    rimraf(config.clean, cb);
});

gulp.task('nodemon', function () {
    nodemon(config.nodemon);
});

// Команду "gulp start" Heroku запускает командой "npm start" для настройки и старта сайта на QA 
gulp.task('start', sequence('clean', 'build', 'nodemon'));

// Kоманду "gulp" лучше использовать для локального старта сайта
gulp.task('default', sequence('clean', ['build', 'webserver', 'watch']));