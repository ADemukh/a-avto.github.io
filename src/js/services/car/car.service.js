(function CarServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.car', CarService);

    CarService.$inject = ['_', '$http', '$q'];

    function CarService(_, $http, $q) {
        var dfdAllCars, dfdEngineCapacities, dfdEngineTypes,  dfdGearBoxes;

        function getAllCars() {
            if (!dfdAllCars) {
                dfdAllCars = $q.defer();
                fetchAllCars();
            }
            return dfdAllCars.promise;
        }

        function fetchAllCars() {
            return $http.get('cars/getCars', {})
                .then(function response(resp) {
                    dfdAllCars.resolve(resp.data);
                });
        }

        function getAllEngineTypes() {
            if (!dfdEngineTypes) {
                dfdEngineTypes = $q.defer();
                fetchAllEngineTypes();
            }
            return dfdEngineTypes.promise;
        }

        function fetchAllEngineTypes() {
            var engineTypes, i;

            return $http.get('cars/getEngineTypes', {})
                .then(function response(resp) {
                    engineTypes = [];
                    for (i = 0; i < resp.data.length; i += 1) {
                        engineTypes.push(resp.data[i].name);
                    }

                    dfdEngineTypes.resolve(engineTypes);
                });
        }

        function getAllEngineCapacities() {
            if (!dfdEngineCapacities) {
                dfdEngineCapacities = $q.defer();
                fetchAllEngineCapacities();
            }
            return dfdEngineCapacities.promise;
        }

        function fetchAllEngineCapacities() {
            var engineTypesCapacities, i;

            return $http.get('cars/getEngineCapacities', {})
                .then(function response(resp) {
                    engineTypesCapacities = [];
                    for (i = 0; i < resp.data.length; i += 1) {
                        engineTypesCapacities.push(resp.data[i].name);
                    }
                    dfdEngineCapacities.resolve(engineTypesCapacities);
                });
        }

        function getAllGearboxes() {
            if (!dfdGearBoxes) {
                dfdGearBoxes = $q.defer();
                fetchAllGearboxes();
            }
            return dfdGearBoxes.promise;
        }

        function fetchAllGearboxes() {
            var gearBoxes, i;

            return $http.get('cars/getGearboxes', {})
                .then(function response(resp) {
                    gearBoxes = [];
                    for (i = 0; i < resp.data.length; i += 1) {
                        gearBoxes.push(resp.data[i].name);
                    }
                    dfdGearBoxes.resolve(gearBoxes);
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