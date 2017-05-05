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
            }).then(updateCurrentUser);
        }

        function changeContactInfo(contactInfo) {
            return $http.post('profile/changeclientcontactinfo', {
                email: identityService.user.email,
                contactInfo: contactInfo
            }).then(updateCurrentUser);
        }

        function changePassword(newPassword) {
            return $http.post('profile/changepassword', {
                email: identityService.user.email,
                newPassword: newPassword
            }).then(updateCurrentUser);
        }

        function changeNotifications(notifications) {
            return $http.post('profile/changeclientnotifications', {
                email: identityService.user.email,
                notifications: notifications
            }).then(updateCurrentUser);
        }

        function changeCars(cars) {
            return $http.post('profile/changeclientcars', {
                email: identityService.user.email,
                cars: cars
            }).then(updateCurrentUser);
        }

        function updateCurrentUser(response) {
            if (response.data.success) {
                identityService.user = response.data.details;
            }
            return response;
        }
    }
})();