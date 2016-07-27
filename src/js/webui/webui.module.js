//webui.module.js
(function WebUIModuleInit() {
	"use strict";
	
	angular.module('webui', ['ui.router', 'services'])
        .config(WebUIModuleConfig);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	$stateProvider.state('root', {
            abstract: true,
            templateUrl: 'webui/root/root.tmpl.html',
            url: ''
        }).state('main', {
            templateUrl: 'webui/main/main.tmpl.html',
            url: '/',
            parent: 'root'
        }).state('news', {
            template: '<h2>News</h2>',
            url: '/news',
            parent: 'root'
        }).state('promotions', {
            template: '<h2>Promotions</h2>',
            url: '/promotions',
            parent: 'root'
        }).state('about', {
            template: '<h2>About</h2>',
            url: '/about',
            parent: 'root'
        }).state('help', {
            template: '<h2>Help</h2>',
            url: '/help',
            parent: 'root'
        }).state('term', {
            template: '<h2>Terms & conditions</h2>',
            url: '/term',
            parent: 'root'
        }).state('autoshops', {
            template: '<h2>Auto shops</h2>',
            url: '/autoshops',
            parent: 'root'
        })
    }
})();

