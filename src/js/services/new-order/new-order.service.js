(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.neworder', OrderService);

    function OrderService() {
        var STATUSES, newOrder;

        STATUSES = {
            START: 1,
            DETAILS: 2,
            CAR: 3,
            CONTACTS: 4,
            FINISH: 5,
            COMPLETED: 6
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