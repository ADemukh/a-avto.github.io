(function NotificationsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.notifications', NotificationsService);

    function NotificationsService() {
        var notifications;

        return {
            returnNotifications: returnNotifications
        };

        function returnNotifications(type) {
            if (type == 'client') {
                notifications = [{
                    name: 'Отправлять мне SMS, когда приходят ответы поставщиков по моим заявкам',
                    type: 'OrderFollowed'
                }, {
                    name: 'Отправлять мне e-mail при смене статусов',
                    type: 'OrderStatusChanged'
                }, {
                    name: 'Отправлять мне e-mail при закрытии заявки',
                    type: 'OrderClosed'
                }];
            }
            else if (type == 'shop') {
                notifications = [{
                    name: 'Отправлять мне SMS, когда приходят заявки от клиентов',
                    type: 'OrderFollowed'
                }, {
                    name: 'Отправлять мне e-mail при смене статусов',
                    type: 'OrderStatusChanged'
                }];
            }
            return notifications;
        }
    }
})();