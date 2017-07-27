(function ShopsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.shop', ShopsService);
    ShopsService.$inject = ['_',  '$http', '$q', 'services.identity'];

    function ShopsService(_,  $http, $q, identityService) {
        var allShops, dfd;

        return {
            getShops: getShops,
            changePhoto: changePhoto,
            changeContactInfo: changeContactInfo,
            changePassword: changePassword,
            changeNotifications: changeNotifications,
            changeOptions: changeOptions
        };

        function changePhoto(photo) {
            return $http.post('shops/changeshopphoto', {
                email: identityService.user.email,
                photo: photo
            }).then(updateCurrentUser);
        }

        function changeContactInfo(contactInfo) {
            return $http.post('shops/changeshopcontactinfo', {
                email: identityService.user.email,
                contactInfo: contactInfo
            }).then(updateCurrentUser);
        }

        function changeOptions(options) {
            return $http.post('shops/changeshopoptions', {
                email: identityService.user.email,
                options: options
            }).then(updateCurrentUser);
        }

        function changePassword(newPassword) {
            return $http.post('shops/changepassword', {
                email: identityService.user.email,
                newPassword: newPassword
            }).then(updateCurrentUser);
        }

        function changeNotifications(notifications) {
            return $http.post('shops/changeshopnotifications', {
                email: identityService.user.email,
                notifications: notifications
            }).then(updateCurrentUser);
        }

        function updateCurrentUser(response) {
            if (response.data.success) {
                identityService.user = response.data.details;
            }
            return response;
        }

        function getAllShops() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllShops({});
            }
            return dfd.promise;
        }

        function fetchAllShops(filter) {
            return $http.get('shops/getShops', filter)
                .then(function response(resp) {
                   allShops = resp.data;
                    dfd.resolve(allShops);
                });
        }

        function getShops() {
            return getAllShops();
        }
    }
})();

