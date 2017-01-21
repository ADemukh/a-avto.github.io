(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.cars', CarsService);

    CarsService.$inject = ['_', '$http', '$q'];

    function CarsService(_, $http, $q) {
        var allCars, dfd;

        function getAllCars() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllCars({});
            }
            return dfd.promise;
        }

        function fetchAllCars(filter) {
            return $http.get('cars/getCars', filter)
                .then(function response(resp) {
                   allCars = resp.data;
                    dfd.resolve(allCars);
                });
        }

        return {
            getCars: getCars,
            getCarModels: getCarModels,
            getCarModelYears: getYears
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
                        years.push(i);
                    }
                    return years;
                });
        }
    }
})();