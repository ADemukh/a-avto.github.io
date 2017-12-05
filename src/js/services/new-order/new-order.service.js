(function OrderServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.neworder', OrderService);

    OrderService.$inject = ['services.identity', '$http', 'services.events'];

    function OrderService(identityService, $http, events) {
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
        events.on('logout', clearOrder);
        return {
            newOrder: getNewOrder,
            clear: clearOrder,
            submit: submitOrder,
            statuses: STATUSES
        };

        function getNewOrder() {
            return newOrder;
        }

        function clearOrder() {
            newOrder = newEmptyOrder();
        }

        function submitOrder() {
            // identity.signUpAnon -> register with name, email + temp password + token ->
            // save order
            // save car
            return $http.post('order/submitneworder', {
                order: newOrder
            }).then(function onSubmit(resp) {
                clearOrder();

                return resp.data;
            });
        }

        function newEmptyOrder() {
            return {
                details: {},
                car: {
                    selected: {},
                    newCar: {
                        _id: 'newCarId'
                    }
                },
                contacts: {},
                shops: [],
                status: STATUSES.START,
                filters: {}
            };
        }
    }
})();