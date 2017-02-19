(function ShopsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.shops', ShopsService);
    ShopsService.$inject = ['_',  '$http', '$q'];

    function ShopsService(_,  $http, $q) {
        var allShops, dfd;

        function getAllShops() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllShops({});
            }
            return dfd.promise;
        }

        function fetchAllShops(filter) {
            return $http.get('shops/getShops', filter)
                .then(function response(resp) {
                   allShops = resp.data;
                    dfd.resolve(allShops);
                });
        }

        return {
            getShops: getShops
        };

        function getShops() {
            return getAllShops();
        }
    }
})();

