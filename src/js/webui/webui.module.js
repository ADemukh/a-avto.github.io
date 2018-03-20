//webui.module.js
/*eslint no-bitwise:0, quote-props:0, max-depth:0 */
var WEBUI_MODULE_NAME;

(function WebUIModuleInit() {
    'use strict';

    WEBUI_MODULE_NAME = 'aAvto.webui';
    angular.module(WEBUI_MODULE_NAME, ['ui.router', 'aavto.core', 'services', 'templates', 'aavto.translate', 'ui.bootstrap', 'yaMap', 'oi.select', 'ngFileUpload', 'matchMedia'])
        .config(WebUIModuleConfig)
        .value('_', window._)
        .value('moment', window.moment)
        .constant('routingConfig', window.routingConfig)
        .value('redirectToUrlAfterLogin', {
            url: '/'
        })
        .run(WebUIModuleRun);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$qProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider, $httpProvider, $qProvider) {
        setRoutes();
        setRules();
        setInterceptors();
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
                    templateUrl: 'webui/landing/landing.tmpl.html',
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
                    template: '<q-login/>',
                    url: '/login',
                    parent: 'anon'
                }).state('anon.password-recovery', {
                    template: '<q-password-recovery/>',
                    url: '/password-recovery',
                    parent: 'anon'
                }).state('anon.register', {
                    template: '<q-registration/>',
                    url: '/registration',
                    parent: 'anon'
                }).state('anon.password-set', {
                    template: '<q-password-set/>',
                    url: '/password-set/:token',
                    parent: 'anon'
                });

            // Client routes
            $stateProvider
                .state('client', {
                    template: '<div class="height-full" ui-view/></div>',
                    abstract: true,
                    data: {
                        access: window.routingConfig.accessLevels.client
                    },
                    parent: 'root'
                }).state('client.new-order', {
                    template: '<q-new-order/>',
                    url: '/client/new-order',
                    parent: 'client'
                }).state('client.profile', {
                    templateUrl: 'webui/profile/profile-client/profile-client.tmpl.html',
                    abstract: true,
                    parent: 'client'
                }).state('client.profile.cars', {
                    template: '<q-profile-client-cars class="display-block"/>',
                    url: '/client/profile/cars',
                    parent: 'client.profile'
                }).state('client.profile.orders', {
                    template: '<q-profile-client-orders class="display-block"/>',
                    url: '/client/profile/orders',
                    parent: 'client.profile'
                }).state('client.profile.settings', {
                    template: '<q-profile-client-settings class="display-block"/>',
                    url: '/client/profile/settings',
                    parent: 'client.profile'
                });

            // Shop routes
            $stateProvider
                .state('shop', {
                    template: '<div class="height-full" ui-view/></div>',
                    abstract: true,
                    data: {
                        access: window.routingConfig.accessLevels.shop
                    },
                    parent: 'root'
                }).state('shop.profile', {
                    templateUrl: 'webui/profile/profile-shop/profile-shop.tmpl.html',
                    abstract: true,
                    parent: 'shop'
                }).state('shop.profile.orders', {
                    template: '<q-profile-shop-orders class="display-block"/>',
                    url: '/shop/profile/orders',
                    parent: 'shop.profile'
                }).state('shop.profile.settings', {
                    template: '<q-profile-shop-settings class="display-block"/>',
                    url: '/shop/profile/settings',
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
                });

            // Custom routes
            $stateProvider
                .state('new-order', {
                    template: '<q-new-order/>',
                    url: '/new-order',
                    data: {
                        access: window.routingConfig.accessLevels.anonAndClient
                    },
                    params: {
                        status: null
                    },
                    parent: 'root'
                });

            // Search
            $stateProvider
                .state('search', {
                    abstract: true,
                    templateUrl: 'webui/search/search.tmpl.html'
                })
                .state('search-shops', {
                    template: '<q-search-shops class="height-full flex display-block"/>',
                    url: '/search-shops',
                    data: {
                        access: window.routingConfig.accessLevels.public
                    },
                    parent: 'search'
                })
                .state('search-orders', {
                    template: '<q-search-orders class="height-full flex display-block"/>',
                    url: '/search-orders',
                    data: {
                        access: window.routingConfig.accessLevels.public
                    },
                    parent: 'search'
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
            $httpProvider.interceptors.push(securityInterceptor);
            // $httpProvider.interceptors.push(responseInterceptor);

            function securityInterceptor($q, $location, $injector) {
                return function securityInterceptorPromise(promise) {
                    var identity;

                    identity = $injector.get('services.identity');

                    return promise.then(
                        function onResponse(response) {
                            return response;
                        },
                        function onResponseError(response) {
                            if (response.status === 401 || response.status === 403) {
                                event.preventDefault();
                                identity.saveAttemptUrl();
                                $location.path('/login');
                            }
                            return $q.reject(response);
                        });
                };
            }

            function responseInterceptor($q) {
                return function securityInterceptorPromise(promise) {
                    return promise.then(
                        function onResponse(response) {
                            if (!response.data.item && response.data.error) {
                                return $q.reject(response);
                            }
                            return $q.resolve(response);
                        });
                };
            }
            //================================================
        }

        function errorOnUnhandledRejectionsFalse() {
            $qProvider.errorOnUnhandledRejections(false);
        }
    }

    WebUIModuleRun.$inject = ['$rootScope', '$state', '$location', 'services.identity'];

    function WebUIModuleRun($rootScope, $state, $location, identity) {
        $rootScope.$on('$stateChangeStart', function onStateChangeStart(event, toState, toParams, fromState, fromParams) {
            if (identity.loggedInChecked) {
                if (!('data' in toState) || !('access' in toState.data)) {
                    // $rootScope.error = "Access undefined for this state";
                    event.preventDefault();
                } else if (!identity.authorize(toState.data.access)) {
                    event.preventDefault();
                    if (identity.loggedIn()) {
                        $state.go('public.main');
                    } else {
                        identity.saveAttemptUrl(toState.url);
                        $state.go('anon.login');
                    }
                } else if (toState.name === 'public.main') {
                    if (identity.authorize(identity.accessLevels.client)) {
                        event.preventDefault();
                        $state.go('client.profile.orders');
                    } else if (identity.authorize(identity.accessLevels.shop)) {
                        event.preventDefault();
                        $state.go('shop.profile.orders');
                    }
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