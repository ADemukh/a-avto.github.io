(function RegistrationServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.registration', RegistrationService);

    RegistrationService.$inject = ['$http'];

    function RegistrationService($http) {
        return {
            registerUser: registerUser,
            registerShop: registerShop
        };

        function registerUser(userInfo) {
            return $http.post('registration/registeruser', userInfo)
                .then(function response(res) {
                   return res.data;
                });
        }

        function registerShop(shopInfo) {
            return $http.post('registration/registershop', shopInfo)
                .then(function response(res) {
                   return res.data;
                });
        }
    }
})();