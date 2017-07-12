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
                    var i;
                    var clientNotifications = [];
                    for (i = 0; i < notifications.length; i++) {
                        if (notifications[i].forShop == true) {
                            clientNotifications.push(notifications[i]);
                            continue;
                        }
                    }
                    return clientNotifications;
                });
        }

        function getClientNotifications() {
            return getAllNotifications()
                .then(function onGetNot(notifications) {
                    var i;
                    var shopNotifications;
                    shopNotifications = [];
                    for (i = 0; i < notifications.length; i++) {
                        if (notifications[i].forClient == true) {
                            shopNotifications.push(notifications[i]);
                            continue;
                        }
                    }
                    return shopNotifications;
                });
        }
    }
})();

