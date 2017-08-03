(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.neworder', OrderService);

    function OrderService() {
        var newOrder;

        newOrder = newEmptyOrder();
        return {
            newOrder: newOrder,
            clear: clearOrder,
            submit: submitOrder
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
                contact: {}
            };
        }
    }
})();