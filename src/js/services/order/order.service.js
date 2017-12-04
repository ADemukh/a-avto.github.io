(function OrdersServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.order', OrdersService);

    OrdersService.$inject = ['$http'];

    function OrdersService($http) {
        return {
            getOrders: getOrders
        };

        function getOrders(filter) {
            return $http.get('order/getOrders', {
                params: {
                    filter: filter
                }
            })
            .then(function response(resp) {
                return resp.data;
            });
        }
    }
})();