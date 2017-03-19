//webui.module.js
var WEBUI_MODULE_NAME;

(function WebUIModuleInit() {
    'use strict';

    WEBUI_MODULE_NAME = 'aAvto.webui';
    angular.module(WEBUI_MODULE_NAME, ['ui.router', 'services', 'templates', 'ui.bootstrap', 'yaMap', 'pascalprecht.translate', 'oi.select'])
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
            }).state('order-registration-full', {
                template: '<q-order-registration-full/>',
                url: '/order-registration',
                parent: 'root'
            }).state('order-registration-search', {
                template: '<q-order-registration-search class="height-full display-block"/>',
                url: '/find-shop-by-map',
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
                ORDER_REGISTRATION_FILTERS_TITLE: 'Поиск магазинов на карте',
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
                FOOTER_PROJECT_MAP: 'КАРТА САЙТА'
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