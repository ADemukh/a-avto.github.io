(function NewOrderComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrder', {
            controller: 'controllers.neworder',
            templateUrl: 'webui/new-order/new-order.tmpl.html'
        })
        .controller('controllers.neworder', NewOrderController);

    NewOrderController.$inject = ['$stateParams', 'services.neworder'];

    function NewOrderController($stateParams, newOrderService) {
        this.$onInit = function onInit() {
            this.newOrder = newOrderService.newOrder();
            this.newOrder.status = $stateParams.status || this.newOrder.status;

            this.activeStart = function activeStart() {
                return this.newOrder.status > newOrderService.statuses.START;
            };
            this.activeCar = function activeCar() {
                return this.newOrder.status > newOrderService.statuses.CAR;
            };
            this.activeDetails = function activeDetails() {
                return this.newOrder.status > newOrderService.statuses.DETAILS;
            };
            this.activeContacts = function activeContacts() {
                return this.newOrder.status > newOrderService.statuses.CONTACTS;
            };
            this.activeFinish = function activeFinish() {
                return this.newOrder.status > newOrderService.statuses.FINISH;
            };

            this.showStart = function showStart() {
                return this.newOrder.status === newOrderService.statuses.START;
            };
            this.showCar = function showCar() {
                return this.newOrder.status === newOrderService.statuses.CAR;
            };
            this.showDetails = function showDetails() {
                return this.newOrder.status === newOrderService.statuses.DETAILS;
            };
            this.showContacts = function showContacts() {
                return this.newOrder.status === newOrderService.statuses.CONTACTS;
            };
            this.showFinish = function showFinish() {
                return this.newOrder.status === newOrderService.statuses.FINISH;
            };
            this.showCompleted = function showCompleted() {
                return this.newOrder.status === newOrderService.statuses.COMPLETED;
            };

            this.goToStart = function goToStart() {
                this.newOrder.status = newOrderService.statuses.START;
            };
            this.goToCar = function goToCar() {
                this.newOrder.status = newOrderService.statuses.CAR;
            };
            this.goToDetails = function goToDetails() {
                this.newOrder.status = newOrderService.statuses.DETAILS;
            };
            this.goToContacts = function goToContacts() {
                this.newOrder.status = newOrderService.statuses.CONTACTS;
            };
            this.goToFinish = function goToFinish() {
                this.newOrder.status = newOrderService.statuses.FINISH;
            };
            this.sendOrder = function sendOrder() {
                newOrderService.submit()
                    .then(function setCompleted() {
                        this.newOrder.status = newOrderService.statuses.COMPLETED;
                        newOrderService.clear();
                    }.bind(this));
            };
        };
    }
})();