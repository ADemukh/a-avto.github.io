(function ShopsServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.shop', ShopsService);
    ShopsService.$inject = ['$http', 'services.identity'];

    function ShopsService($http, identityService) {
        return {
            getShops: getShops,
            getShopDialogs: getShopDialogs,
            getOrderDialogById: getOrderDialogById,
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

        function getShops(filter) {
            return $http.get('shops/getShops', {
                params: {
                    filter: filter
                }
            })
            .then(function response(resp) {
                return resp.data;
            });
        }

        function getShopDialogs() {
            return $http.post('profile/getshopdialogs', {
                    id: identityService.user._id
            }).then(function gotDialogs(response) {
                return response.data;
            });
        }

        function getOrderDialogById(id) {
            return $http.post('profile/shop/getOrderDialogById', {
                    id: id
            })
            .then(function gotDialogs(resp) {
                return resp.data;
            });
        }
    }
})();
