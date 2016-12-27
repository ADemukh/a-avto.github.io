//webui.module.js
// eslint no-reserved-keys: 2
(function WebUIModuleInit() {
	'use strict';

	angular.module('webui', ['ui.router', 'services', 'ui.bootstrap', 'yaMap'])
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
        }).state('login', {
            template: '<q-login/>',
            url: '/login',
            parent: 'root'
        }).state('passwordrecovery', {
            template: '<q-password-recovery/>',
            url: '/passwordrecovery',
            parent: 'root'
        }).state('agreement', {
            templateUrl: 'webui/agreement/agreement.tmpl.html',
            url: '/agreement',
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
        });
    }
})();