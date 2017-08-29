(function AdressServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.adress', AdressService);

    AdressService.$inject = ['$q', '$http'];

    function AdressService($q, $http) {
        var allCities, dfd;

        function getAllCities() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllCities();
            }
            return dfd.promise;
        }

        function fetchAllCities() {
            return $http.get('cities/getCities', {})
                .then(function response(resp) {
                    return resp.data;
                }).then(function gotCities(cities) {
                    var i;

                    allCities = [];
                    for (i = 0; i < cities.length; i += 1) {
                        allCities.push(cities[i].name);
                    }

                    dfd.resolve(allCities);
                });
        }

        return {
            getCities: getCities
        };

        function getCities() {
            return getAllCities()
                .then(function gotCities(cities) {
                    return cities;
                });
        }
    }
})();