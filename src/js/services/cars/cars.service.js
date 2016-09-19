(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('cars', CarsService);

    function CarsService() {
        return {
                getCars: getCars
        };

        function getCars() {
            return [
                'Volvo',
                'VW',
                'Mazda'
            ];
        }
    }
})();