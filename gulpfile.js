(function gulpInit() {
    'use strict';

    var angularFilesort,
        angularTemplatecache,
        browserSync,
        concat,
        config,
        es,
        // eslint,
        gulp,
        importCss,
        inject,
        ngAnnotate,
        nodemon, prefixer,
        reload,
        rigger,
        rimraf,
        sequence,
        sourcemaps,
        uglify,
        watch;

    gulp = require('gulp');
    watch = require('gulp-watch');
    prefixer = require('gulp-autoprefixer');
    sourcemaps = require('gulp-sourcemaps');
    rigger = require('gulp-rigger');
    inject = require('gulp-inject');
    es = require('event-stream');
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');
    // cssmin = require('gulp-minify-css'),
    importCss = require('gulp-import-css');
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf');
    browserSync = require('browser-sync');
    sequence = require('gulp-sequence');
    reload = browserSync.reload;
    nodemon = require('gulp-nodemon');
    angularTemplatecache = require('gulp-angular-templatecache');
    angularFilesort = require('gulp-angular-filesort');
    ngAnnotate = require('gulp-ng-annotate');
    // eslint = require('gulp-eslint');
    config = require('./gulp.config.js')();

    // gulp.task('html:build', function htmlBuildTask() {
    //     // Выберем файлы по нужному пути
    //     return gulp.src(config.src.html)
    //         // Прогоним через rigger
    //         .pipe(rigger())
    //         // Выплюнем их в папку build
    //         .pipe(gulp.dest(config.build.html))
    //         // И перезагрузим наш сервер для обновлений
    //         .pipe(reload({
    //             stream: true
    //         }));
    // });

    gulp.task('index', function injectTask() {
        gulp.src('./src/index.html')
            .pipe(inject(gulp.src(config.src.indexjs, {
                read: false
            }), {
                ignorePath: ['../.build'],
                relative: true
            }))
            .pipe(gulp.dest('./.build'))
            // И перезагрузим наш сервер для обновлений
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('js:templateCache', function templateCacheTask() {
        return gulp.src(config.src.templates)
            .pipe(angularTemplatecache(config.templateCache.filename, config.templateCache.options))
            .pipe(gulp.dest(config.build.templates));
    });

    // gulp.task('lint:js', function lintJS() {
    //     return gulp.src(config.src.alljs)
    //         .pipe(eslint())
    //         .pipe(eslint.format())
    //         .pipe(eslint.failAfterError());
    // });

    gulp.task('js:libs', function jsConcatenateTask() {
        // Найдем наш main файл
        return gulp.src(config.src.libsjs)
            // Прогоним через rigger
            .pipe(rigger())
            // Выплюнем готовый файл в build
            .pipe(gulp.dest(config.build.libs))
            // И перезагрузим сервер
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('js:copy', function jsCopyTask() {
        return gulp.src(config.src.srcjs)
            .pipe(sourcemaps.init())
            .pipe(ngAnnotate())
            // .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./.build'));
    });

    gulp.task('js:build', function jsBuildTask(callback) {
        return sequence('js:templateCache', 'js:libs', 'js:copy')(callback);
    });

    gulp.task('style:build', function styleBuildTask() {
        //Выберем наш main.css
        return gulp.src(config.src.style)
            // Выберем наш main.css
            .pipe(importCss())
            // То же самое что и с js
            .pipe(sourcemaps.init())
            // Добавим вендорные префиксы
            .pipe(prefixer())
            // Сожмем
            //.pipe(cssmin())
            .pipe(sourcemaps.write())
            // И в build
            .pipe(gulp.dest(config.build.css))
            .pipe(reload({
                stream: true
            }));
    });

    gulp.task('image:build', function imageBuildTask() {
        //Выберем наши картинки
        return gulp.src(config.src.img)
            // Сожмем их
            // .pipe(imagemin({
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
            .pipe(gulp.dest(config.build.fonts));
    });

    gulp.task('build', sequence(['js:build',
        'style:build',
        'fonts:build',
        'image:build'], 'index'));

    gulp.task('rebuild:html', function rebuildHtmlTask(callback) {
        return sequence('js:build', 'html:build')(callback);
    });

    gulp.task('watch', function watchTask() {
        watch([config.watch.html], function watchHtmlTask(event, cb) {
            return gulp.start('rebuild:html');
        });
        watch([config.watch.style], function watchStyleTask(event, cb) {
            return gulp.start('style:build');
        });
        watch([config.watch.js], function watchJsTask(event, cb) {
            return gulp.start('js:build');
        });
        watch([config.watch.img], function watchImagesTask(event, cb) {
            return gulp.start('image:build');
        });
        watch([config.watch.fonts], function watchFontsTask(event, cb) {
            return gulp.start('fonts:build');
        });
    });

    gulp.task('webserver', ['nodemon'], function webserverTask() {
        browserSync.init(null, config.browserSync);
    });

    gulp.task('nodemon', function nodemonTask(cb) {
        var started;

        started = false;
        return nodemon(config.nodemon)
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

    gulp.task('clean:tmp', function cleanTmpTask(cb) {
        rimraf(config.clean.tmp, cb);
    });

    gulp.task('clean', ['clean:build', 'clean:tmp']);

    gulp.task('www', function wwwTask() {
        nodemon({
            script: './bin/www'
        });
    });

    // Команду "gulp start" Heroku запускает командой "npm start" для настройки и старта сайта на QA
    gulp.task('start', function startTask(callback) {
        return sequence('clean', 'build', 'www')(callback);
    });

    // Kоманду "gulp" лучше использовать для локального старта сайта
    gulp.task('default', function defaultTask(callback) {
        return sequence('clean', 'build', ['webserver'])(callback);
    });
})();