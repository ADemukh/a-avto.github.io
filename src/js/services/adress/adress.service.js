(function AdressServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.adress', AdressService);

    function AdressService() {
        var adress;

        adress = ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест', 'Бобруйск', 'Барановичи', 'Борисов', 'Пинск', 'Орша', 'Мозырь', 'Солигорск', 'Новополоцк', 'Лида', 'Молодечно', 'Полоцк', 'Жлобин', 'Светлогорск', 'Речица'];

        return {
            getAdress: getAdress
        };

        function getAdress() {
            return adress;
        }
    }
})();