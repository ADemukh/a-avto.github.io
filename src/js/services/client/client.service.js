(function ClientServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.client', ClientService);
    ClientService.$inject = ['$http', 'services.identity'];

    function ClientService($http, identityService) {
        return {
            changePhoto: changePhoto,
            changeContactInfo: changeContactInfo,
            changePassword: changePassword,
            changeNotifications: changeNotifications,
            changeCars: changeCars,
            getOrders: getOrders,
            closeOrder: closeOrder,
            deleteOrder: deleteOrder
        };

        function changePhoto(photo) {
            return $http.post('profile/changeclientphoto', {
                email: identityService.user.email,
                photo: photo
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

        function changeNotifications(selectedNotifications) {
            return $http.post('profile/changeclientnotifications', {
                email: identityService.user.email,
                notifications: selectedNotifications
            }).then(updateCurrentUser);
        }

        function changeCars(cars) {
            return $http.post('profile/changeclientcars', {
                email: identityService.user.email,
                cars: cars
            }).then(updateCurrentUser);
        }

        function updateCurrentUser(response) {
            if (response.data.item) {
                identityService.user = response.data.item;
            }
            return response;
        }

        function getOrders(filter) {
            return $http.post('profile/getclientorders', {
                filter: filter,
                email: identityService.user.email,
                id: identityService.user._id
            }).then(function gotOrders(response) {
                return response.data;
            });
        }

        function closeOrder(order) {
            return Promise.resolve();
        }

        function deleteOrder(order) {
            return Promise.resolve();
        }
    }
})();