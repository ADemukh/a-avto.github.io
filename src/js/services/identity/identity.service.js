/*eslint no-bitwise:0, quote-props:0, no-param-reassign:0 , max-params:0 */
(function IdentityServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.identity', IdentityService);

    IdentityService.$inject = ['$http', '$q', 'services.popup', 'routingConfig', '$state', 'redirectToUrlAfterLogin', '$location'];

    function IdentityService($http, $q, popupService, routingConfig, $state, redirectToUrlAfterLogin, $location) {
        var api;

        api = {
            logIn: logIn,
            logOut: logOut,
            checkLoggedIn: checkLoggedIn,
            loggedInChecked: false,
            authVk: authVk,
            authFacebook: authFacebook,
            signUp: signUp,
            recoverPassword: recoverPassword,
            changePassword: changePassword,
            setPassword: setPassword,
            user: anonUser(),
            authorize: authorize,
            loggedIn: loggedIn,
            accessLevels: routingConfig.accessLevels,
            userRoles: routingConfig.userRoles,
            saveAttemptUrl: saveAttemptUrl,
            redirectToAttemptedUrl: redirectToAttemptedUrl
        };

        return api;

        function checkLoggedIn() {
            return $http.post('/auth/loggedin')
                .then(function response(resp) {
                    if (resp.data) {
                        changeUser(resp.data);
                    }
                })
                .finally(function checked() {
                    api.loggedInChecked = true;
                });
        }

        function changeUser(user) {
            api.user = angular.copy(user);
        }

        function anonUser() {
            return {
                name: '',
                role: routingConfig.userRoles.public.title
            };
        }

        function logIn(email, password) {
            return $http.post('/auth/login', {
                    email: email,
                    password: password
                })
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        changeUser(resp.data.user);
                        return api.user;
                    }
                    return $q.reject(resp.data);
                });
        }

        function logOut() {
            return $http.post('/auth/logout')
                .then(function response() {
                    changeUser(anonUser());
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
            popupService.popup(url, strategy, {}, function callback(err, user) {
                if (!err && user && user.user) {
                    changeUser(user.user);
                    return dfd.resolve(api.user);
                }
                return dfd.reject(err);
            });

            return dfd.promise;
        }

        function signUp(userInfo, role) {
            return $http.post(role === 'shop' ? 'auth/signupshop' : 'auth/signupuser', userInfo)
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        changeUser(resp.data.user);
                        return api.user;
                    }
                    return $q.reject(resp.data);
                });
        }

        function authorize(accessLevel, role) {
            if (role === undefined) {
                role = api.user.role;
            }

            return accessLevel.bitMask & routingConfig.userRoles[role].bitMask;
        }

        function loggedIn(user) {
            if (user === undefined) {
                user = api.user;
            }
            return authorize(routingConfig.accessLevels.user, user.role);
        }

        function recoverPassword(email) {
            return $http.post('auth/recoverpassword', {
                email: email
            });
        }

        function changePassword(email, newPassword) {
            return $http.post('auth/changepassword', {
                email: email,
                password: newPassword
            })
            .then(function response(resp) {
                if (resp.data && resp.data.user) {
                    changeUser(resp.data.user);
                    return api.user;
                }
                return $q.reject(resp.data);
            });
        }

        function setPassword(emailToken, newPassword) {
            return $http.post('auth/setpassword', {
                emailToken: emailToken,
                password: newPassword
            })
            .then(function response(resp) {
                if (resp.data && resp.data.user) {
                    changeUser(resp.data.user);
                    return api.user;
                }
                return $q.reject(resp.data);
            });
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