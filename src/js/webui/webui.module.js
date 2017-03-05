//webui.module.js
// eslint no-reserved-keys: 2
(function WebUIModuleInit() {
    'use strict';

    angular.module('webui', ['ui.router', 'services', 'ui.bootstrap', 'yaMap', 'pascalprecht.translate', 'oi.select'])
        .config(WebUIModuleConfig)
        .constant('_', window._);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$translateProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider, $httpProvider, $translateProvider) {
        setRoutes();
        setInterceptors();
        setTranslations();


        function setRoutes() {
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
            }).state('password-set', {
                template: '<q-password-set-vertical/>',
                url: '/password-set',
                parent: 'root'
            });
            //================================================
        }

        function setInterceptors() {
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

        function setTranslations() {
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

            $translateProvider.translations('ru', {
                AUTH_SOCIAL_TITLE: 'Войдите, используя аккаунт соцсети',
                HOW_IT_WORKS_TITLE: 'Как работает aAvto.by',
                HOW_IT_WORKS_OPTIONS: 'Есть несколько вариантов поиска запчастей',
                HOW_IT_WORKS_OPTION1: 'Создайте заявку во все магазины',
                HOW_IT_WORKS_OPTION1_ACTION1: 'Создаёте заявку',
                HOW_IT_WORKS_OPTION1_ACTION2: 'Сравниваете цены',
                HOW_IT_WORKS_OPTION1_ACTION3: 'Выбираете магазин',
                HOW_IT_WORKS_OPTION1_ACTION_BUTTON: 'Создать заявку на запчасть',
                HOW_IT_WORKS_OPTION2: 'Ищите магазины по цене на карте',
                HOW_IT_WORKS_OPTION2_ACTION1: 'Ищете нужные вам работы по прайс-листам во всех магазинах',
                HOW_IT_WORKS_OPTION2_ACTION2: 'Выбираете лучшие предложения и договариваетесь с магазином',
                HOW_IT_WORKS_OPTION2_ACTION_BUTTON: 'Искать магазины',
                ORDER_REGISTRATION_CHOOSE_MARK: 'Марка',
                ORDER_REGISTRATION_CHOOSE_MODEL: 'Модель',
                ORDER_REGISTRATION_CHOOSE_YEAR: 'Год',
                PROFILE_CLIENT_CARS: 'Гараж',
                PROFILE_CLIENT_ORDERS: 'Заявки',
                PROFILE_CLIENT_SETTINGS: 'Настройки',
                PROFILE_SHOP_ORDERS: 'Заявки',
                PROFILE_SHOP_SETTINGS: 'Настройки',
                VIDEO_TITLE: 'Обучающий ролик aAvto.by',
                OK: 'ОК',
                BUTTON_LANG_EN: 'английский',
                BUTTON_LANG_RU: 'русский'
            });
            $translateProvider.translations('en', {
                // english translations here
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_RU: 'russian'
            });
            $translateProvider.preferredLanguage('ru');
        }
    }
})();