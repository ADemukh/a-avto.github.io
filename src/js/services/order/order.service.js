(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.order', OrderService);

    function OrderService() {
        var newOrder;

        newOrder = {};
        return {
            newOrder: newOrder
        };
    }
})();