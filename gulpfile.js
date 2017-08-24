(function gulpInit() {
    'use strict';

    var $,
        browserSync,
        config,
        gulp,
        reload,
        rimraf;

    gulp = require('gulp');
    config = require('./gulp.config.js')();
    $ = require('gulp-load-plugins')();
    browserSync = require('browser-sync');
    reload = browserSync.reload;
    rimraf = require('rimraf');
    // pngquant = require('imagemin-pngquant')

    gulp.task('index', function injectTask() {
        gulp.src(config.indexjs.src.indexhtml)
            .pipe($.inject(gulp.src(config.indexjs.src.js, config.indexjs.options), config.indexjs.destOptions))
            .pipe(gulp.dest(config.indexjs.dest))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('js:templates', function templatesTask() {
        return gulp.src(config.templates.src)
            .pipe($.angularTemplatecache(config.templates.filename, config.templates.options))
            .pipe(gulp.dest(config.templates.dest))
            .pipe(reload({
                stream: true
            }));
    });

    // gulp.task('lint:js', function lintJS() {
    //     return gulp.src(config.src.alljs)
    //         .pipe($.eslint())
    //         .pipe($.eslint.format())
    //         .pipe($.eslint.failAfterError());
    // });

    gulp.task('js:copy', function jsCopyTask() {
        return gulp.src(config.src.js)
            // .pipe($.sourcemaps.init())
            // .pipe($.ngAnnotate())
            // .pipe($.uglify())
            // .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.build.js))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('js:build', function jsBuildTask(callback) {
        return $.sequence('js:templates', 'js:copy')(callback);
    });

    gulp.task('style:build', function styleBuildTask() {
        return gulp.src(config.src.style)
            .pipe($.importCss())
            .pipe($.sourcemaps.init())
            .pipe($.autoprefixer())
            // .pipe($.minifyCss())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.build.css))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('less:build', function lessBuild() {
        return gulp.src(config.src.less)
            .pipe($.sourcemaps.init())
            .pipe($.less())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.build.less));
    });

    gulp.task('image:build', function imageBuildTask() {
        //Выберем наши картинки
        return gulp.src(config.src.img)
            // Сожмем их
            // .pipe($.imagemin({
            //     progressive: true,
            //     svgoPlugins: [{removeViewBox: false}],
            //     use: [pngquant()],
            //     interlaced: true
            // }))
            // И бросим в build
            .pipe(gulp.dest(config.build.img))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('fonts:build', function fontsBuildTask() {
        return gulp.src(config.src.fonts)
            .pipe(gulp.dest(config.build.fonts))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('build', $.sequence(['js:build',
        'style:build',
        'less:build',
        'fonts:build',
        'image:build'
    ], 'index'));

    gulp.task('watch', function watchTask() {
        gulp.watch(config.watch.indexhtml, ['index']);
        gulp.watch(config.watch.js, ['js:copy']);
        gulp.watch(config.watch.templates, ['js:templates']);
        gulp.watch(config.watch.style, ['style:build']);
        gulp.watch(config.watch.less, ['less:build']);
        gulp.watch(config.watch.img, ['image:build']);
        gulp.watch(config.watch.fonts, ['fonts:build']);
    });

    gulp.task('webserver', ['nodemon'], function webserverTask() {
        browserSync.init(null, config.browserSync);
    });

    gulp.task('nodemon', function nodemonTask(cb) {
        var started;

        started = false;
        return $.nodemon(config.nodemon)
            .on('start', function onStart() {
                // to avoid nodemon being started multiple times
                if (!started) {
                    cb();
                    started = true;
                }
            });
    });

    gulp.task('clean:build', function cleanBuildTask(cb) {
        rimraf(config.clean.build, cb);
    });

    gulp.task('clean', ['clean:build']);

    gulp.task('www', function wwwTask() {
        $.nodemon({
            script: './bin/www'
        });
    });

    // Команду "gulp start" Heroku запускает командой "npm start" для настройки и старта сайта на QA
    gulp.task('start', function startTask(callback) {
        return $.sequence('clean', 'build', 'www')(callback);
    });

    // Kоманду "gulp" лучше использовать для локального старта сайта
    gulp.task('default', function defaultTask(callback) {
        return $.sequence('clean', 'build', ['webserver', 'watch'])(callback);
    });
})();