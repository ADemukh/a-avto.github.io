//webui.module.js
(function WebUIModuleInit() {
	"use strict";
	
	angular.module('webui', ['ui.router', 'services', 'ui.bootstrap'])
        .config(WebUIModuleConfig)
        .constant('_', window._);

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
            template: '<q-user-login/>',
            url: '/user',
            parent: 'root'
        }).state('getpass', {
            template: '<q-get-pass/>',
            url: '/getpass',
            parent: 'root'
        }).state('agreement', {
            templateUrl: 'webui/agreement/agreement.tmpl.html',
            url: '/agreement',
            parent: 'root'
        }).state('enter', {
            template: '<h2>Enter</h2>',
            url: '/user/enter',
            parent: 'root'
        }).state('maps', {
            template: '<q-maps/>',
            url: '/maps',
            parent: 'root'
        }).state('bid', {
            template: '<q-new-bid>',
            url: '/bid/newbid',
            parent: 'root'
        }).state('registration', {
            template: '<q-registration/>',
            url: '/registration',
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