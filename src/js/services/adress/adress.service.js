(function AdressServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.adress', AdressService);

    AdressService.$inject = ['$q', '$http'];

    function AdressService($q, $http) {
        var cities, dfd;
        
        function getAllCities() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllCities({});
            }
            return dfd.promise;
        }

        function fetchAllCities(filter) {
            return $http.get('cities/getCities', filter)
                .then(function response(resp) {
                    cities = resp.data;
                    dfd.resolve(cities);
                });
        }

        return {
            getCities: getCities
        };

        function getCities() {
            return getAllCities()
                .then(function gotCities(Cities) {
                    var allCities, i;

                    allCities = [];
                    for (i = 0; i < Cities.length; i += 1) {
                        allCities.push(Cities[i].name);
                    }
                    return allCities;
                });
        }
    }
})();