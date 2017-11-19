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
            // return $http.get('shops/getOrders', {
            //         params: {
            //             filter: filter
            //         }
            //     })
            //     .then(function response(resp) {
            //         allOrders = resp.data;
            //         dfd.resolve(allOrders);
            //     });

            var dummyOrders;

            dummyOrders = [
                {
                    id: 1,
                    status: 'opened'
                },
                {
                    id: 2,
                    status: 'pending'
                },
                {
                    id: 3,
                    status: 'closed'
                }
            ];
            return $q.resolve(dummyOrders)
                .then(function response(orders) {
                    allOrders = orders;
                    dfd.resolve(allOrders);
                });
        }

        function getOrders(filters) {
            return getAllOrders(filters);
        }
    }
})();