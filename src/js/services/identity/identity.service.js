/*eslint no-bitwise:0, quote-props:0, no-param-reassign:0  */
(function IdentityServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.identity', IdentityService);

    IdentityService.$inject = ['$http', '$q', 'services.popup', 'routingConfig'];

    function IdentityService($http, $q, popupService, routingConfig) {
        var api;

        api = {
            logIn: logIn,
            logOut: logOut,
            checkLoggedIn: checkLoggedIn,
            authVk: authVk,
            authFacebook: authFacebook,
            signUpUser: signUpUser,
            signUpShop: signUpShop,
            recoverPassword: recoverPassword,
            changePassword: changePassword,
            user: anonUser(),
            authorize: authorize,
            loggedIn: loggedIn,
            accessLevels: routingConfig.accessLevels,
            userRoles: routingConfig.userRoles
        };

        checkLoggedIn();

        return api;

        function checkLoggedIn() {
            return $http.post('/auth/loggedin')
                .then(function response(resp) {
                    if (resp.data) {
                        changeUser(resp.data);
                    }
                });
        }

        function changeUser(user) {
            api.user = user;
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
                    }
                    return resp.data;
                });
        }

        function logOut() {
            return $http.post('/auth/logout')
                .then(function response() {
                    changeUser(anonUser());
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

        function signUpUser(userInfo) {
            return $http.post('auth/signupuser', userInfo)
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        changeUser(resp.data.user);
                    }
                    // reject here with error
                    return resp.data;
                });
        }

        function signUpShop(shopInfo) {
            return $http.post('auth/signupshop', shopInfo)
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        currentUser = resp.data;
                    }
                    return resp.data;
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
            });
        }
    }
})();