(function ShopsServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.shop', ShopsService);
    ShopsService.$inject = ['$http', '$q', 'services.identity'];

    function ShopsService($http, $q, identityService) {
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
            return $http.post('profile/changeshopphoto', {
                email: identityService.user.email,
                photo: photo
            }).then(updateCurrentUser);
        }

        function changeContactInfo(contactInfo) {
            return $http.post('profile/changeshopcontactinfo', {
                email: identityService.user.email,
                contactInfo: contactInfo
            }).then(updateCurrentUser);
        }

        function changeOptions(options) {
            return $http.post('profile/changeshopoptions', {
                email: identityService.user.email,
                options: options
            }).then(updateCurrentUser);
        }

        function changePassword(newPassword) {
            return $http.post('profile/changepassword', {
                email: identityService.user.email,
                newPassword: newPassword
            }).then(updateCurrentUser);
        }

        function changeNotifications(notifications) {
            return $http.post('profile/changeshopnotifications', {
                email: identityService.user.email,
                notifications: notifications
            }).then(updateCurrentUser);
        }

        function updateCurrentUser(response) {
            if (response.data.item) {
                identityService.user = response.data.item;
            }
            return response;
        }

        function getAllShops(filter) {
            dfd = $q.defer();
            fetchAllShops(filter);
            return dfd.promise;
        }

        function fetchAllShops(filter) {
            return $http.get('shops/getShops', {
                    params: {
                        filter: filter
                    }
                })
                .then(function response(resp) {
                    allShops = resp.data;
                    dfd.resolve(allShops);
                });
        }

        function getShops(filters) {
            return getAllShops(filters);
        }
    }
})();