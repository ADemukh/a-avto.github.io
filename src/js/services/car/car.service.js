(function CarServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.car', CarService);

    CarService.$inject = ['_', '$http', '$q'];

    function CarService(_, $http, $q) {
        var allCars, allEngineCapacities, allEngineTypes, allGearboxes, dfd, dfd1, dfd2, dfd3;

        function getAllCars() {
            if (!dfd1) {
                dfd1 = $q.defer();
                fetchAllCars({});
            }
            return dfd1.promise;
        }

        function fetchAllCars(filter) {
            return $http.get('cars/getCars', filter)
                .then(function response(resp) {
                    allCars = resp.data;
                    dfd1.resolve(allCars);
                });
        }

        function getAllEngineTypes() {
            if (!dfd2) {
                dfd2 = $q.defer();
                fetchAllEngineTypes({});
            }
            return dfd2.promise;
        }

        function fetchAllEngineTypes(filter) {
            return $http.get('cars/getEngineTypes', filter)
                .then(function response(resp) {
                    allEngineTypes = resp.data;
                    dfd2.resolve(allEngineTypes);
                });
        }

        function getAllEngineCapacities() {
            if (!dfd3) {
                dfd3 = $q.defer();
                fetchAllEngineCapacities({});
            }
            return dfd3.promise;
        }

        function fetchAllEngineCapacities(filter) {
            return $http.get('cars/getEngineCapacities', filter)
                .then(function response(resp) {
                    allEngineCapacities = resp.data;
                    dfd3.resolve(allEngineCapacities);
                });
        }

        function getAllGearboxes() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllGearboxes({});
            }
            return dfd.promise;
        }

        function fetchAllGearboxes(filter) {
            return $http.get('cars/getGearboxes', filter)
                .then(function response(resp) {
                    allGearboxes = resp.data;
                    dfd.resolve(allGearboxes);
                });
        }

        return {
            getCars: getCars,
            getCarModels: getCarModels,
            getCarModelYears: getYears,
            getEngineCapacities: getEngineCapacities,
            getEngineTypes: getEngineTypes,
            getGearboxes: getGearboxes
        };

        function getCars() {
            return getAllCars()
                .then(function onRecievingCars(cars) {
                    return _.map(_.uniqBy(cars, 'mark'), function map(car) {
                        return car.mark;
                    });
                });
        }

        function getCarModels(carMark) {
            return getAllCars()
                .then(function onRecievingCars(cars) {
                    return _.chain(cars)
                        .filter(function filter(car) {
                            return car.mark === carMark;
                        })
                        .map(function map(car) {
                            return car.model;
                        })
                        .value();
                });
        }

        function getYears(carMark, carModel) {
            return getAllCars()
                .then(function onRecievingCars(cars) {
                    return _.find(cars, function find(car) {
                        return car.mark === carMark && car.model === carModel;
                    });
                })
                .then(function onCarFound(car) {
                    var i, years;

                    years = [];
                    for (i = (new Date()).getFullYear(); i >= car.from; i -= 1) {
                        years.push(i.toString());
                    }
                    return years;
                });
        }

        function getEngineTypes() {
            return getAllEngineTypes()
                .then(function onGetNot(types) {
                    return types;
                });
        }

        function getEngineCapacities() {
            return getAllEngineCapacities()
                .then(function onGetNot(capacities) {
                    return capacities;
                });
        }

        function getGearboxes() {
            return getAllGearboxes()
                .then(function onGetNot(gearboxes) {
                    return gearboxes;
                });
        }
    }
})();