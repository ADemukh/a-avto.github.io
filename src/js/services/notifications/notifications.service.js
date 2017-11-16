(function NotificationsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.notifications', NotificationsService);

    NotificationsService.$inject = ['$http', '$q'];

    function NotificationsService($http, $q) {
        var dfdClientNotifications, dfdShopNotifications;

        function getAllShopNotifications() {
            if (!dfdShopNotifications) {
                dfdShopNotifications = $q.defer();
                fetchAllShopNotifications();
            }
            return dfdShopNotifications.promise;
        }

        function getAllClientNotifications() {
            if (!dfdClientNotifications) {
                dfdClientNotifications = $q.defer();
                fetchAllClientNotifications();
            }
            return dfdClientNotifications.promise;
        }

        function fetchNotifications(filter) {
            return $http.get('notifications/getNotifications', {
                    params: {
                        filter: filter
                    }
                })
                .then(function response(resp) {
                    return resp.data;
                });
        }

        function fetchAllShopNotifications() {
            return fetchNotifications({
                    forShop: true
                })
                .then(function gotShopNotifications(notifications) {
                    dfdShopNotifications.resolve(notifications);
                });
        }

        function fetchAllClientNotifications() {
            return fetchNotifications({
                    forClient: true
                })
                .then(function gotClientNotifications(notifications) {
                    dfdClientNotifications.resolve(notifications);
                });
        }

        return {
            getShopNotifications: getShopNotifications,
            getClientNotifications: getClientNotifications
        };

        function getShopNotifications() {
            return getAllShopNotifications()
                .then(function gotNotifications(shopsNotifications) {
                    return shopsNotifications;
                });
        }

        function getClientNotifications() {
            return getAllClientNotifications()
                .then(function gotNotifications(clientNotifications) {
                    return clientNotifications;
                });
        }
    }
})();