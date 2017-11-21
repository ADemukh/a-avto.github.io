(function OrderServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.neworder', OrderService);

    OrderService.$inject = ['services.identity'];

    function OrderService(identityService) {
        var STATUSES, newOrder;

        STATUSES = {
            START: 1,
            DETAILS: 2,
            CAR: 3,
            CONTACTS: 4,
            FINISH: 5,
            COMPLETED: 6
        };
        newOrder = newEmptyOrder();
        return {
            newOrder: newOrder,
            clear: clearOrder,
            submit: submitOrder,
            statuses: STATUSES
        };

        function clearOrder() {
            newOrder = newEmptyOrder();
        }

        function submitOrder() {}

        function newEmptyOrder() {
            return {
                details: {},
                car: {
                    selected: {},
                    newCar: {
                        _id: 'newCarId'
                    }
                },
                contacts: {
                    name: identityService.user.name,
                    email: identityService.user.email,
                    phoneNumbers: [angular.copy(identityService.user.phone)],
                    address: identityService.user.address,
                    city: identityService.user.city
                },
                status: STATUSES.START,
                shops: []
            };
        }
    }
})();