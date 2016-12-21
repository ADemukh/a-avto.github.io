(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('cars', CarsService);

    CarsService.$inject = ['_', '$http'];

    function CarsService(_, $http) {
        return {
            getCars: getCars,
            getCarModels: getCarModels,
            getYears: getYears
        };

        function loadCars(filter){
            return $http.get('cars/getCars', filter)
                .then(function response(resp) {
                    return resp.data;
                })
                .catch(function setError(resp) {
                    console.log(resp);
                    return [];
                });
        }

        function getCars() {
            return loadCars({})
                .then(function(cars) {
                    return _.map(_.uniqBy(cars, 'mark'), function(car) {
                        return car.mark;
                    });
                });
        }

        function getCarModels(car) {
            return loadCars({ mark: car })
                .then(function(cars) {
                    return _.map(cars, function(car) {
                        return car.model;
                    });
                });
        }

        function getYears() {
            var date = new Date();        
            var nowyears=date.getFullYear() ;
            var years=[];
            for (var i=nowyears; i>=1970; i--)
            {
                years.push(i);

            }
            return years;
        }
    }
})();