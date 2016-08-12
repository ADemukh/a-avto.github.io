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
        }).state('search', {
            template: '<h2>Mappp</h2>',
            url: '/search',
            parent: 'root'
        }).state('reg', {
            template: '<h2>Registration</h2>',
            url: '/user/reg',
            parent: 'root'
        }).state('enter', {
            template: '<h2>Enter</h2>',
            url: '/user/enter',
            parent: 'root'
        }).state('bid', {
            template: '<h2>New Bid</h2>',
            url: '/bid/newbid',
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
        }).state('rules', {
            templateUrl: 'webui/rules/rules.tmpl.html',
            url: '/rules',
            parent: 'root'
        })
    }
})();