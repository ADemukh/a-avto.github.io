(function NotificationsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.notifications', NotificationsService);

    NotificationsService.$inject = ['$http', '$q'];

    function NotificationsService($http, $q) {
        var allNotifications, dfd;

        function getAllNotifications() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllNotifications({});
            }
            return dfd.promise;
        }

        function fetchAllNotifications(filter) {
            return $http.get('notifications/getNotifications', filter)
                .then(function response(resp) {
                    allNotifications = resp.data;
                    dfd.resolve(allNotifications);
                });
        }

        return {
            getShopNotifications: getShopNotifications,
            getClientNotifications: getClientNotifications
        };

        function getShopNotifications() {
            return getAllNotifications()
                .then(function onGetNot(notifications) {
                    var clientNotifications, i;

                    clientNotifications = [];
                    for (i = 0; i < notifications.length; i += 1) {
                        if (notifications[i].forShop === true) {
                            clientNotifications.push(notifications[i]);
                        }
                    }
                    return clientNotifications;
                });
        }

        function getClientNotifications() {
            return getAllNotifications()
                .then(function onGetNot(notifications) {
                    var i, shopNotifications;

                    shopNotifications = [];
                    for (i = 0; i < notifications.length; i += 1) {
                        if (notifications[i].forClient === true) {
                            shopNotifications.push(notifications[i]);
                        }
                    }
                    return shopNotifications;
                });
        }
    }
})();

