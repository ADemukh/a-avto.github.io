(function IdentityServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.identity', IdentityService);

    IdentityService.$inject = ['$http'];

    function IdentityService($http) {
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
            authVkontakte: authVkontakte,
            authFacebook: authFacebook,
            currentUser: getCurrentUser,
            signUpUser: signUpUser,
            signUpShop: signUpShop,
            recoverPassword: recoverPassword
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

        function authVkontakte() {
            return $http.get('auth/facebook')
                .then(function response(resp) {
                    return resp;
                });
        }

        function authFacebook() {
            return $http.get('auth/facebook')
                .then(function response(resp) {
                    return resp;
                });}

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
    }
})();