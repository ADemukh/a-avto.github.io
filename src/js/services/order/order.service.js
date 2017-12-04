(function OrdersServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.order', OrdersService);

    OrdersService.$inject = ['_', '$http', '$q'];

    function OrdersService(_, $http, $q) {
        var allOrders, dfd;

        return {
            getOrders: getOrders
        };

        function getAllOrders(filter) {
            dfd = $q.defer();
            fetchAllOrders(filter);
            return dfd.promise;
        }

        function fetchAllOrders(filter) {
            return $http.get('order/getOrders', {
                    params: {
                        filter: filter
                    }
                })
                .then(function response(resp) {
                    allOrders = resp.data;
                    dfd.resolve(allOrders);
                });
        }

        function getOrders(filters) {
            return getAllOrders(filters);
        }
    }
})();