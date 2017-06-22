//webui.module.js
/*eslint no-bitwise:0, quote-props:0, max-depth:0 */
var WEBUI_MODULE_NAME;

(function WebUIModuleInit() {
    'use strict';

    WEBUI_MODULE_NAME = 'aAvto.webui';
    angular.module(WEBUI_MODULE_NAME, ['ui.router', 'services', 'templates', 'ui.bootstrap', 'yaMap', 'pascalprecht.translate', 'oi.select'])
        .config(WebUIModuleConfig)
        .constant('_', window._)
        .constant('routingConfig', window.routingConfig)
        .run(WebUIModuleRun);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$translateProvider', '$qProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider, $httpProvider, $translateProvider, $qProvider) {
        setRoutes();
        setRules();
        setInterceptors();
        setTranslations();
        errorOnUnhandledRejectionsFalse();


        function setRoutes() {
            //================================================
            // Define all the routes
            //================================================
            // Root route
            $stateProvider
                .state('root', {
                    abstract: true,
                    templateUrl: 'webui/root/root.tmpl.html',
                    url: ''
                });

            // Public routes
            $stateProvider
                .state('public', {
                    template: '<div class="height-full" ui-view/></div>',
                    data: {
                        access: window.routingConfig.accessLevels.public
                    },
                    abstract: true,
                    parent: 'root'
                }).state('public.main', {
                    templateUrl: 'webui/main/main.tmpl.html',
                    url: '/',
                    parent: 'public'
                }).state('public.agreement', {
                    templateUrl: 'webui/agreement/agreement.tmpl.html',
                    url: '/agreement',
                    parent: 'public'
                }).state('public.contacts', {
                    templateUrl: 'webui/contacts/contacts.tmpl.html',
                    url: '/contacts',
                    parent: 'public'
                }).state('public.term', {
                    template: '<h2>Terms & conditions</h2>',
                    url: '/term',
                    parent: 'public'
                }).state('public.rules', {
                    templateUrl: 'webui/rules/rules.tmpl.html',
                    url: '/rules',
                    parent: 'public'
                }).state('public.order-registration-full', {
                    template: '<q-order-registration-full/>',
                    url: '/order-registration',
                    parent: 'public'
                }).state('public.order-registration-search', {
                    template: '<q-order-registration-search class="height-full display-block"/>',
                    url: '/find-shop-by-map',
                    parent: 'public'
                });

            // Anonymous routes
            $stateProvider
                .state('anon', {
                    abstract: true,
                    template: '<div class="height-full" ui-view/></div>',
                    data: {
                        access: window.routingConfig.accessLevels.anon
                    },
                    parent: 'root'
                }).state('anon.login', {
                    template: '<q-login-vertical/>',
                    url: '/login',
                    parent: 'anon'
                }).state('anon.password-recovery', {
                    template: '<q-password-recovery-vertical/>',
                    url: '/password-recovery',
                    parent: 'anon'
                }).state('anon.register', {
                    template: '<q-registration/>',
                    url: '/registration',
                    parent: 'anon'
                }).state('anon.password-set', {
                    template: '<q-password-set-vertical/>',
                    url: '/password-set',
                    parent: 'anon'
                });

            // Client routes
            $stateProvider
                .state('client', {
                    template: '<div class="height-full" ui-view/></div>',
                    url: '/client',
                    abstract: true,
                    data: {
                        access: window.routingConfig.accessLevels.client
                    },
                    parent: 'root'
                }).state('client.profile', {
                    templateUrl: 'webui/profile/profile-client/profile-client.tmpl.html',
                    url: '/profile',
                    abstract: true,
                    parent: 'client'
                }).state('client.profile.cars', {
                    template: '<q-profile-client-cars/>',
                    url: '/cars',
                    parent: 'client.profile'
                }).state('client.profile.orders', {
                    template: '<q-profile-client-orders/>',
                    url: '/orders',
                    parent: 'client.profile'
                }).state('client.profile.settings', {
                    template: '<q-profile-client-settings/>',
                    url: '/settings',
                    parent: 'client.profile'
                });

            // Shop routes
            $stateProvider
                .state('shop', {
                    template: '<div class="height-full" ui-view/></div>',
                    url: '/shop',
                    abstract: true,
                    data: {
                        access: window.routingConfig.accessLevels.shop
                    },
                    parent: 'root'
                }).state('shop.profile', {
                    templateUrl: 'webui/profile/profile-shop/profile-shop.tmpl.html',
                    url: '/profile',
                    abstract: true,
                    parent: 'shop'
                }).state('shop.profile.orders', {
                    template: '<q-profile-shop-orders/>',
                    url: '/orders',
                    parent: 'shop.profile'
                }).state('shop.profile.settings', {
                    template: '<q-profile-shop-settings/>',
                    url: '/settings',
                    parent: 'shop.profile'
                });

            // Admin routes
            $stateProvider
                .state('admin', {
                    abstract: true,
                    template: '<ui-view/>',
                    data: {
                        access: window.routingConfig.accessLevels.admin
                    },
                    parent: 'root'
                    // })
                    // .state('admin.admin', {
                    //     url: '/admin/',
                    //     templateUrl: 'admin',
                    //     controller: 'AdminCtrl'
                });

            $urlRouterProvider.otherwise('/');
            //================================================
        }

        function setRules() {
            // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
            // $urlRouterProvider.rule(function ($injector, $location) {
            //     if ($location.protocol() === 'file')
            //         return;

            //     var path = $location.path()
            //         // Note: misnomer. This returns a query object, not a search string
            //         ,
            //         search = $location.search(),
            //         params;

            //     // check to see if the path already ends in '/'
            //     if (path[path.length - 1] === '/') {
            //         return;
            //     }

            //     // If there was no search string / query params, return with a `/`
            //     if (Object.keys(search).length === 0) {
            //         return path + '/';
            //     }

            //     // Otherwise build the search string and return a `/?` prefix
            //     params = [];
            //     angular.forEach(search, function (v, k) {
            //         params.push(k + '=' + v);
            //     });
            //     return path + '/?' + params.join('&');
            // });
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
                        if (response.status === 401 || response.status === 403) {
                            $location.path('/login');
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
                monday: "Понедельник",
                tuesday: "Вторник",
                wednesday: "Среда",
                thursday: "Четверг",
                friday: "Пятница",
                saturday: "Суббота",
                sunday: "Воскресенье",
                AUTH_SOCIAL_TITLE: 'Войдите, используя аккаунт соцсети',
                HOW_IT_WORKS_TITLE: 'Как работает aAvto.by',
                HOW_IT_WORKS_OPTIONS: 'Есть несколько вариантов поиска запчастей',
                HOW_IT_WORKS_OPTION1: 'Создайте заявку во все магазины',
                HOW_IT_WORKS_OPTION1_ACTION1: 'Создаёте заявку',
                HOW_IT_WORKS_OPTION1_ACTION2: 'Сравниваете цены',
                HOW_IT_WORKS_OPTION1_ACTION3: 'Выбираете магазин',
                HOW_IT_WORKS_OPTION1_ACTION_BUTTON: 'Создать заявку на запчасть',
                HOW_IT_WORKS_OPTION2: 'Ищите магазины на карте',
                HOW_IT_WORKS_OPTION2_ACTION1: 'Ищете удобный вам магазин на карте',
                HOW_IT_WORKS_OPTION2_ACTION2: 'Отправляете заявку',
                HOW_IT_WORKS_OPTION2_ACTION_BUTTON: 'Искать магазины',
                ORDER_REGISTRATION_CHOOSE_CAR_MARK: 'Марка',
                ORDER_REGISTRATION_CHOOSE_CAR_MODEL: 'Модель',
                ORDER_REGISTRATION_CHOOSE_CAR_MODEL_YEAR: 'Год',
                PROFILE_CLIENT_CARS: 'Гараж',
                PROFILE_CLIENT_ORDERS: 'Заявки',
                PROFILE_CLIENT_SETTINGS: 'Настройки',
                PROFILE_SHOP_ORDERS: 'Заявки',
                PROFILE_SHOP_SETTINGS: 'Настройки',
                VIDEO_TITLE: 'Обучающий ролик aAvto.by',
                OK: 'ОК',
                BUTTON_LANG_EN: 'английский',
                BUTTON_LANG_RU: 'русский',
                LOGIN_TITLE: 'Вход на сайт',
                LOGIN_EMAIL: 'E-mail',
                LOGIN_PASSWORD: 'Пароль',
                LOGIN_SIGN_IN: 'Войти',
                LOGIN_FORGOT_PASSWORD: 'Забыли пароль?',
                LOGIN_PASSWORD_IS_REQUIRED: 'Введите пароль',
                LOGIN_EMAIL_IS_REQUIRED: 'Введите E-mail',
                LOGIN_EMAIL_IS_NOT_CORRECT: 'Неправильный E-mail',
                PASSWORD_RECOVERY_TITLE: 'Восстановление пароля',
                PASSWORD_RECOVERY_EMAIL: 'E-mail',
                PASSWORD_RECOVERY_RECOVER_ACTION: 'Восстановить пароль',
                PASSWORD_RECOVERY_EMAIL_IS_REQUIRED: 'Введите E-mail',
                PASSWORD_RECOVERY_EMAIL_IS_NOT_CORRECT: 'Неправильный e-mail',
                PASSWORD_SET_TITLE: 'Установить пароль',
                PASSWORD_SET_NEW_PASSWORD: 'Новый пароль',
                PASSWORD_SET_NEW_PASSWORD_REPEAT: 'Повторить новый пароль',
                PASSWORD_SET_PASSWORD_IS_REQUIRED: 'Введите пароль',
                PASSWORD_SET_PASSWORDS_ARE_DIFFERENT: 'Пароли не совпадают',
                PASSWORD_SET_SAVE: 'Сохранить',
                NAVIGATION_MAPS: 'ПОИСК МАГАЗИНА',
                NAVIGATION_LOG_IN: 'ВОЙТИ',
                NAVIGATION_LOG_OUT: 'ВЫЙТИ',
                NAVIGATION_REGISTER: 'РЕГИСТРАЦИЯ',
                NAVIGATION_ORDERS: 'ЗАЯВКИ',
                NAVIGATION_CLIENT_ORDERS: 'ЗАЯВКИ',
                NAVIGATION_CLIENT_CARS: 'ГАРАЖ',
                NAVIGATION_CLIENT_SETTINGS: 'НАСТРОЙКИ',
                NAVIGATION_SHOP_ORDERS: 'ЗАЯВКИ',
                NAVIGATION_SHOP_SETTINGS: 'НАСТРОЙКИ',
                ORDER_REGISTRATION_FILTERS_TITLE: 'Параметры поиска',
                ORDER_REGISTRATION_FILTERS_FOUND_SHOPS: 'Найдено ',
                ORDER_REGISTRATION_FILTERS_CITIES: 'Город',
                ORDER_REGISTRATION_FILTERS_CARS: 'Марка',
                ORDER_REGISTRATION_FILTERS_CATEGORY: 'Категория',
                ORDER_REGISTRATION_FILTERS_DETAIL_NEW: 'Новая',
                ORDER_REGISTRATION_FILTERS_DETAIL_OLD: 'Б/у',
                ORDER_REGISTRATION_FILTERS_SHOP_WORKS_NOW: 'Работает сейчас',
                ORDER_REGISTRATION_FILTERS_SHOP_WORKS_ON_WEEKEND: 'Работает в выходные',
                ORDER_REGISTRATION_FILTERS_APPLY: 'Применить',
                REGISTRATION_TAB_CLIENT: 'Я клиент',
                REGISTRATION_TAB_SHOP: 'Я магазин',
                REGISTRATION_CLIENT_TITLE: 'Регистрация клиента',
                REGISTRATION_CLIENT_CONTACT_NAME: 'Контактное имя',
                REGISTRATION_CLIENT_EMAIL: 'E-mail',
                REGISTRATION_CLIENT_PHONE: '+375 xx xxx xx xx',
                REGISTRATION_CLIENT_PASSWORD: 'Пароль',
                REGISTRATION_CLIENT_PASSWORD_CONFIRM: 'Повторите пароль',
                REGISTRATION_CLIENT_TO_LOGIN: 'Войти',
                REGISTRATION_CLIENT_POLICY_1: 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ',
                REGISTRATION_CLIENT_POLICY_2: 'Пользовательским соглашением',
                REGISTRATION_CLIENT_POLICY_3: ' и даете ',
                REGISTRATION_CLIENT_POLICY_4: 'Согласие на обработку персональных данных',
                REGISTRATION_CLIENT_POLICY_5: '.',
                REGISTRATION_CLIENT_CONTACT_NAME_IS_REQUIRED: 'Введите контактное имя',
                REGISTRATION_CLIENT_EMAIL_IS_REQUIRED: 'Введите E-mail',
                REGISTRATION_CLIENT_EMAIL_IS_NOT_CORRECT: 'Неправильный E-mail',
                REGISTRATION_CLIENT_PHONE_IS_NOT_CORRECT: 'Номер не соответветствует шаблону +375 xx xxx xx xx',
                REGISTRATION_CLIENT_PASSWORD_IS_REQUIRED: 'Введите пароль',
                REGISTRATION_CLIENT_PASSWORDS_ARE_DIFFERENT: 'Пароли не совпадают',
                REGISTRATION_CLIENT_REGISTER: 'Зарегистрироваться',
                REGISTRATION_SHOP_TITLE: 'Регистрация магазина',
                REGISTRATION_SHOP_NAME: 'Наименование компании',
                REGISTRATION_SHOP_EMAIL: 'E-mail',
                REGISTRATION_SHOP_PHONE: '+375 xx xxx xx xx',
                REGISTRATION_SHOP_PASSWORD: 'Пароль',
                REGISTRATION_SHOP_PASSWORD_CONFIRM: 'Повторите пароль',
                REGISTRATION_SHOP_WWW: 'Адрес сайта',
                REGISTRATION_SHOP_ADDRESS: 'Адрес магазина на карте',
                REGISTRATION_SHOP_NAME_IS_REQUIRED: 'Введите наименование компании',
                REGISTRATION_SHOP_EMAIL_IS_REQUIRED: 'Введите E-mail',
                REGISTRATION_SHOP_EMAIL_IS_NOT_CORRECT: 'Неправильный e-mail',
                REGISTRATION_SHOP_PHONE_IS_NOT_CORRECT: 'Номер не соответветствует шаблону +375 xx xxx xx xx',
                REGISTRATION_SHOP_PASSWORD_IS_REQUIRED: 'Введите E-mail',
                REGISTRATION_SHOP_PASSWORDS_ARE_DIFFERENT: 'Пароли не совпадают',
                REGISTRATION_SHOP_WWW_IS_REQUIRED: 'Введите адрес сайта магазина',
                REGISTRATION_SHOP_ADDRESS_IS_REQUIRED: 'Отметьте адрес магазина на карте',
                REGISTRATION_SHOP_REGISTER: 'Зарегистрироваться',
                REGISTRATION_SHOP_CONTACT_NAME: 'Название магазина',
                REGISTRATION_SHOP_CONTACT_NAME_IS_REQUIRED: 'Введите название магазина',
                REGISTRATION_SHOP_EMAIL_IS_REQUIRED: 'Введите E-mail',
                REGISTRATION_SHOP_EMAIL_IS_NOT_CORRECT: 'Неправильный E-mail',
                REGISTRATION_SHOP_PHONE_IS_NOT_CORRECT: 'Номер не соответветствует шаблону +375 xx xxx xx xx',
                REGISTRATION_SHOP_WWW_IS_NOT_CORRECT: 'Введите адрес сайта магазина',
                REGISTRATION_SHOP_CITIES_IS_NOT_CORRECT: 'Выберите обслуживаемые города',
                REGISTRATION_SHOP_CATEGORIES_IS_NOT_CORRECT: 'Выберите обслуживаемые категории запчатей',
                REGISTRATION_SHOP_AUTO_IS_NOT_CORRECT: 'Выберите обслуживаемые автомобили',
                FOOTER_EMAIL: 'info@aavto.by',
                FOOTER_PHONE: '+375 XX XXX XX XX',
                FOOTER_AAVTO: 'Aavto',
                FOOTER_MAPS: 'ПОИСК',
                FOOTER_REGISTER_ORDER: 'ЗАЯВКА',
                FOOTER_FOR_SHOPS: 'ДЛЯ МАГАЗИНОВ',
                FOOTER_RATES: 'ТАРИФЫ',
                FOOTER_ABOUT_PROJECT: 'О ПРОЕКТЕ',
                FOOTER_CONTACTS: 'КОНТАКТЫ',
                FOOTER_HOW_IT_WORKS: 'КАК ЭТО РАБОТАЕТ',
                FOOTER_FAQ: 'ВОПРОС-ОТВЕТ',
                FOOTER_INFORMATION: 'ИНФОРМАЦИЯ',
                FOOTER_AGREEMENT: 'СОГЛАШЕНИЕ',
                FOOTER_RULES: 'ОФЕРТА',
                FOOTER_CONFIDENTIALITY: 'КОНФИДЕНЦИАЛЬНОСТЬ',
                FOOTER_PROJECT_MAP: 'КАРТА САЙТА',
                CHANGE_CONFIRMATION: 'Вы уверены?',
                CONFIRM: 'Да',
                REJECT: 'Нет'
            });
            $translateProvider.translations('en', {
                // english translations here
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_RU: 'russian'
            });
            $translateProvider.preferredLanguage('ru');
        }

        function errorOnUnhandledRejectionsFalse() {
            $qProvider.errorOnUnhandledRejections(false);
        }
    }

    WebUIModuleRun.$inject = ['$rootScope', '$state', 'services.identity'];

    function WebUIModuleRun($rootScope, $state, identity) {
        $rootScope.$on('$stateChangeStart', function onStateChangeStart(event, toState, toParams, fromState, fromParams) {
            if (identity.loggedInChecked) {
                if (!('data' in toState) || !('access' in toState.data)) {
                    // $rootScope.error = "Access undefined for this state";
                    event.preventDefault();
                } else if (!identity.authorize(toState.data.access)) {
                    // $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
                    event.preventDefault();
                    $state.go('anon.login');
                }
            } else {
                event.preventDefault();
                return identity.checkLoggedIn()
                    .then(function stateGo() {
                        return $state.go(toState, toParams);
                    });
            }
        });
    }
})();