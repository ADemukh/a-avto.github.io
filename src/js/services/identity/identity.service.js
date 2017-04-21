(function IdentityServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.identity', IdentityService);

    IdentityService.$inject = ['$http', '$q', 'services.popup'];

    function IdentityService($http, $q, popupService) {
        var currentUser;

        checkLoggedIn();

        function checkLoggedIn() {
            return $http.post('/auth/loggedin')
                .then(function response(resp) {
                    if (resp.data) {
                        currentUser = resp.data;
                    }
                    return loggedIn();
                });
        }

        return {
            logIn: logIn,
            logOut: logOut,
            loggedIn: loggedIn,
            checkLoggedIn: checkLoggedIn,
            authVk: authVk,
            authFacebook: authFacebook,
            currentUser: getCurrentUser,
            signUpUser: signUpUser,
            signUpShop: signUpShop,
            recoverPassword: recoverPassword,
            changePassword: changePassword
        };

        function logIn(email, password) {
            return $http.post('/auth/login', {
                    email: email,
                    password: password
                })
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        currentUser = resp.data;
                    }
                    return resp.data;
                });
        }

        function logOut() {
            return $http.post('/auth/logout')
                .then(function response() {
                    currentUser = null;
                });
        }

        function loggedIn() {
            return !!currentUser;
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
                if (!err && user) {
                    currentUser = user;
                    return dfd.resolve(user);
                }
                return dfd.reject(err);
            });

            return dfd.promise;
        }

        function getCurrentUser() {
            return currentUser;
        }

        function signUpUser(userInfo) {
            return $http.post('auth/signupuser', userInfo)
                .then(function response(resp) {
                    if (resp.data && resp.data.user) {
                        currentUser = resp.data;
                    }
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