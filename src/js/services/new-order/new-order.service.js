(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.neworder', OrderService);

    function OrderService() {
        var STATUSES, newOrder;

        STATUSES = {
            START: 1,
            CAR: 2,
            DETAILS: 3,
            CONTACTS: 4,
            FINISH: 5
        };
        newOrder = newEmptyOrder();
        return {
            newOrder: newOrder,
            clear: clearOrder,
            submit: submitOrder,
            statuses: STATUSES
        };

        function clearOrder() {
            newOrder = newEmptyOrder();
        }

        function submitOrder() {
        }

        function newEmptyOrder() {
            return {
                car: {},
                spares: [],
                city: '',
                contact: {},
                status: STATUSES.START
            };
        }
    }
})();