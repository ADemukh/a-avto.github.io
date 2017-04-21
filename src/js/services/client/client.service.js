(function ClientServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.client', ClientService);
    ClientService.$inject = ['$http', 'services.identity', 'services.file'];

    function ClientService($http, identityService) {
        return {
            changePhoto: changePhoto,
            changeMainInfo: changeMainInfo,
            changePassword: changePassword,
            changeNotifications: changeNotifications
        };

        function changePhoto(photoId) {
            return $http.post('client/changephoto', {
                email: identityService.currentUser.email,
                photoId: photoId
            });
        }

        function changeMainInfo(newEmail, newPhone, newContactName) {
            // return $http.post('client/changemaininfo', {
            //     email: identityService.currentUser.email,
            //     newEmail: newEmail,
            //     newPhone: newPhone,
            //     newContactName: newContactName
            // });
        }

        function changeNotifications(notifications) {
            return $http.post('client/changenotifications', {
                notifications: notifications
            });
        }

        function changePassword(newPassword) {
            return identityService.changePassword(identityService.currentUser.email, newPassword);
        }
    }
})();