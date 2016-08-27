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
        }).state('user', {
            templateUrl: 'webui/user/user.tmpl.html',
            url: '/user',
            parent: 'root'
        }).state('getpass', {
            templateUrl: 'webui/getpass/getpass.tmpl.html',
            url: '/user/getpass',
            parent: 'root'
        }).state('agreement', {
            templateUrl: 'webui/agreement/agreement.tmpl.html',
            url: '/agreement',
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
        }).state('contacts', {
            templateUrl: 'webui/contacts/contacts.tmpl.html',
            url: '/contacts',
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