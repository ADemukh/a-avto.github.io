(function AdressServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.adress', AdressService);

    AdressService.$inject = ['$q'];

    function AdressService($q) {
        var cities;

        cities = [
            'Минск',
            'Гомель',
            'Могилёв',
            'Витебск',
            'Гродно',
            'Брест',
            'Бобруйск',
            'Барановичи',
            'Борисов',
            'Пинск',
            'Орша',
            'Мозырь',
            'Солигорск',
            'Новополоцк',
            'Лида',
            'Молодечно',
            'Полоцк',
            'Жлобин',
            'Светлогорск',
            'Речица'
        ];

        return {
            getCities: getCities
        };

        function getCities() {
            return $q.resolve(cities);
        }
    }
})();