module.exports = function exports() {
    'use strict';

    var config;

    config = {
        src: {
            html: 'src/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/main.css',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        build: {
            html: '.build/',
            js: '.build/js/',
            css: '.build/css/',
            img: '.build/img/',
            fonts: '.build/fonts/',
            templates: '.build/js/templates/',
            indexjs: '.build/'
        },
        clean: {
            build: './.build'
        },
        watch: {
            indexhtml: 'src/index.html',
            js: 'src/js/**/!(*.min)+(.js)',
            style: 'src/style/**/*.css',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*',
            templates: 'src/js/**/*.tmpl.html'
        },
        browserSync: {
            proxy: 'http://localhost:3000',
            files: ['.build/**/*.*'],
            port: 5000
        },
        nodemon: {
            script: './bin/www'
        },
        templates: {
            src: 'src/js/**/*.tmpl.html',
            filename: 'templates.js',
            options: {
                base: '',
                module: 'templates',
                standalone: true,
                templateHeader: '//templates\r\nangular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {',
                templateFooter: '}]);'
            },
            dest: '.build/js/templates/'
        },
        indexjs: {
            src: {
                indexhtml: 'src/index.html',
                js: '.build/js/**/*.js'
            },
            options: {
                read: false
            },
            dest: '.build',
            destOptions: {
                ignorePath: ['../.build'],
                relative: true
            }
        }
    };

    return config;
};


