(function CarServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.car', CarService);

    CarService.$inject = ['_', '$http', '$q'];

    function CarService(_, $http, $q) {
        var allCars, clientCars, dfd;

        clientCars = [{
            mark: 'Volvo',
            model: 'XC60',
            years: '2009'
        }, {
            mark: 'BMW',
            model: '5-series',
            years: '2002'
        }, {
            mark: 'Renault',
            model: 'Megane',
            years: '2010'
        }, {
            mark: 'Ford',
            model: 'Galaxy',
            years: '2011'
        }];


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
            getCarModelYears: getYears,
            getClientCars: getClientCars
        };


        function getClientCars() {
            return $q.resolve(clientCars);
        }


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