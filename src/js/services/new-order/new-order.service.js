(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.neworder', OrderService);

    function OrderService() {
        var newOrder;

        newOrder = emptyNewOrder();
        return {
            newOrder: newOrder,
            carMarkIsSet: carMarkIsSet,
            carModelIsSet: carModelIsSet,
            carYearIsSet: carYearIsSet,
            clearNewOrder: clearNewOrder
        };

        function carMarkIsSet() {
            return newOrder && newOrder.car && newOrder.car.mark;
        }

        function carModelIsSet() {
            return newOrder && newOrder.car && newOrder.car.model;
        }

        function carYearIsSet() {
            return newOrder && newOrder.car && newOrder.car.year;
        }

        function clearNewOrder() {
            newOrder = emptyNewOrder();
        }

        function emptyNewOrder() {
            return {
                car: {}
            };
        }
    }
})();