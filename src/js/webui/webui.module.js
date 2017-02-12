//webui.module.js
// eslint no-reserved-keys: 2
(function WebUIModuleInit() {
	'use strict';

	angular.module('webui', ['ui.router', 'services', 'ui.bootstrap', 'yaMap'])
        .config(WebUIModuleConfig)
        .constant('_', window._);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        //================================================
        // Define all the routes
        //================================================
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
            template: '<q-login-vertical/>',
            url: '/login',
            parent: 'root'
        }).state('password-recovery', {
            template: '<q-password-recovery-vertical/>',
            url: '/password-recovery',
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
         }).state('order-registration', {
            template: '<q-order-registration-full/>',
            url: '/order-registration',
            parent: 'root'
        }).state('maps', {
            template: '<q-maps/>',
            url: '/maps',
            parent: 'root'
        }).state('profile-client', {
            templateUrl: 'webui/profile/profile-client/profile-client.tmpl.html',
            url: '/profile/client',
            abstract: true,
            parent: 'root'
        }).state('profile-client-cars', {
            template: '<q-profile-client-cars/>',
            url: '/cars',
            parent: 'profile-client'
        }).state('profile-client-orders', {
            template: '<q-profile-client-orders/>',
            url: '/orders',
            parent: 'profile-client'
        }).state('profile-client-settings', {
            template: '<q-profile-client-settings/>',
            url: '/settings',
            parent: 'profile-client'
        }).state('profile-shop', {
            templateUrl: 'webui/profile/profile-shop/profile-shop.tmpl.html',
            url: '/profile/shop',
            abstract: true,
            parent: 'root'
        }).state('profile-shop-orders', {
            template: '<q-profile-shop-orders/>',
            url: '/orders',
            parent: 'profile-shop'
        }).state('profile-shop-settings', {
            template: '<q-profile-shop-settings/>',
            url: '/settings',
            parent: 'profile-shop'
        });
        //================================================

        //================================================
        // Add an interceptor for AJAX errors
        //================================================
        $httpProvider.interceptors.push(function interceptor($q, $location) {
            return {
                response: function onResponse(response) {
                    // do something on success
                    return response;
                },
                responseError: function onResponseError(response) {
                    if (response.status === 401) {
                        $location.url('/login');
                    }
                    return $q.reject(response);
                }
            };
        });
        //================================================
    }
})();