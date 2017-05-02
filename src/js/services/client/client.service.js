(function ClientServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.client', ClientService);
    ClientService.$inject = ['$http', 'services.identity'];

    function ClientService($http, identityService) {
        return {
            changePhoto: changePhoto,
            changeContactInfo: changeContactInfo,
            changePassword: changePassword,
            changeNotifications: changeNotifications,
            changeCars: changeCars
        };

        function changePhoto(photoId) {
            return $http.post('profile/changeclientphoto', {
                email: identityService.user.email,
                photoId: photoId
            });
        }

        function changeContactInfo(contactInfo) {
            return $http.post('profile/changeclientcontactinfo', {
                email: identityService.user.email,
                contactInfo: contactInfo
            });
        }

        function changePassword(newPassword) {
            return $http.post('profile/changepassword', {
                email: identityService.user.email,
                newPassword: newPassword
            });
        }

        function changeNotifications(notifications) {
            return $http.post('profile/changeclientnotifications', {
                email: identityService.user.email,
                notifications: notifications
            });
        }

        function changeCars(cars) {
            return $http.post('profile/changeclientcars', {
                email: identityService.user.email,
                cars: cars
            });
        }
    }
})();