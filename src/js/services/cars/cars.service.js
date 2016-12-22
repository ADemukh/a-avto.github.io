(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('cars', CarsService);

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

        function fetchAllCars(filter){
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
                .then(function(cars) {
                    return _.map(_.uniqBy(cars, 'mark'), function(car) {
                        return car.mark;
                    });
                });
        }

        function getCarModels(carMark) {
            return getAllCars()
                .then(function(cars) {
                    return _.chain(cars)
                            .filter(function (car) { return car.mark === carMark; })
                            .map(function(car) { return car.model; })
                            .value();
                });
        }

        function getYears(carMark, carModel) {
            return getAllCars()
                .then(function(cars) {
                    return _.find(cars, function(car) {
                        return car.mark === carMark && car.model === carModel;
                    });
                })
                .then(function(car) {
                    var date = new Date();        
                    var nowyears=date.getFullYear();
                    var years=[];
                    for (var i=nowyears; i>= car.from; i--)
                    {
                        years.push(i);

                    }
                    return years;
                });
        }
    }
})();