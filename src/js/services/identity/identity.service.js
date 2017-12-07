/*eslint no-bitwise:0, quote-props:0, no-param-reassign:0 , max-params:0 */
(function IdentityServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.identity', IdentityService);

    IdentityService.$inject = ['$http', '$q', 'services.popup', 'routingConfig', '$state', 'redirectToUrlAfterLogin', '$location', 'services.events'];

    function IdentityService($http, $q, popupService, routingConfig, $state, redirectToUrlAfterLogin, $location, events) {
        var api;

        api = {
            user: anonUser(),
            logIn: logIn,
            logOut: logOut,
            checkLoggedIn: checkLoggedIn,
            loggedInChecked: false,
            loggedIn: loggedIn,
            authVk: authVk,
            authFacebook: authFacebook,
            signUp: signUp,
            signUpClientPartial: signUpClientPartial,
            checkEmailIsFree: checkEmailIsFree,
            recoverPassword: recoverPassword,
            setPassword: setPassword,
            authorize: authorize,
            accessLevels: routingConfig.accessLevels,
            userRoles: routingConfig.userRoles,
            saveAttemptUrl: saveAttemptUrl,
            redirectToAttemptedUrl: redirectToAttemptedUrl
        };

        return api;

        function checkLoggedIn() {
            return $http.post('/auth/loggedin')
                .then(changeUser)
                .finally(function checked() {
                    api.loggedInChecked = true;
                });
        }

        function changeUser(resp) {
            if (resp.data.item) {
                api.user = angular.copy(resp.data.item);
            }
            return api.user;
        }

        function anonUser() {
            return {
                name: '',
                role: routingConfig.userRoles.anon.title
            };
        }

        function logIn(email, password) {
            return $http.post('/auth/login', {
                    email: email,
                    password: password
                })
                .then(changeUser);
        }

        function logOut() {
            return $http.post('/auth/logout')
                .then(function response() {
                    changeUser({
                        data: {
                            item: anonUser()
                        }
                    });
                    events.emit('logout');
                    $state.go('public.main');
                });
        }

        function authVk() {
            return authSocial('/auth/popup/vk', 'VK Connect');
        }

        function authFacebook() {
            return authSocial('/auth/popup/facebook', 'Facebook Connect');
        }

        function authSocial(url, strategy) {
            var dfd;

            dfd = $q.defer();
            popupService.popup(url, strategy, {}, function callback(err, userItem) {
                if (!err && userItem) {
                    return dfd.resolve(changeUser({
                        data: userItem
                    }));
                }
                return dfd.reject(err);
            });

            return dfd.promise;
        }

        function signUp(userInfo, role) {
            return $http.post(role === 'shop' ? 'auth/signupshop' : 'auth/signupclient', userInfo)
                .then(changeUser);
        }

        function signUpClientPartial(userInfoPartial) {
            return $http.post('auth/signupclientpartial', userInfoPartial)
                .then(changeUser);
        }

        function checkEmailIsFree(email) {
            return $http.post('auth/emailisfree', {
                email: email
            });
        }

        function authorize(accessLevel, role) {
            if (role === undefined) {
                role = api.user.role;
            }

            return accessLevel.bitMask & routingConfig.userRoles[role].bitMask;
        }

        function loggedIn() {
            return authorize(routingConfig.accessLevels.user, api.user.role);
        }

        function recoverPassword(email) {
            return $http.post('auth/recoverpassword', {
                email: email
            });
        }

        function setPassword(token, password) {
            return $http.post('auth/setpassword', {
                    token: token,
                    password: password
                })
                .then(changeUser);
        }

        function saveAttemptUrl(attemptUrl) {
            if (attemptUrl && attemptUrl !== '/login') {
                redirectToUrlAfterLogin.url = attemptUrl;
            } else if (attemptUrl === '/login' || $location.path().toLowerCase() === '/login') {
                redirectToUrlAfterLogin.url = '/';
            } else {
                redirectToUrlAfterLogin.url = $location.path();
            }
        }

        function redirectToAttemptedUrl() {
            $location.path(redirectToUrlAfterLogin.url);
        }
    }
})();