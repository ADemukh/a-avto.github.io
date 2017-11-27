(function NewOrderComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrder', {
            controller: 'controllers.neworder',
            templateUrl: 'webui/new-order/new-order.tmpl.html'
        })
        .controller('controllers.neworder', NewOrderController);

    NewOrderController.$inject = ['services.neworder'];

    function NewOrderController(newOrderService) {
        this.$onInit = function onInit() {
            this.newOrderStatus = newOrderService.statuses.START;
            this.newOrder = angular.copy(newOrderService.newOrder);

            this.activeStart = function activeStart() {
                return this.newOrderStatus > newOrderService.statuses.START;
            };
            this.activeCar = function activeCar() {
                return this.newOrderStatus > newOrderService.statuses.CAR;
            };
            this.activeDetails = function activeDetails() {
                return this.newOrderStatus > newOrderService.statuses.DETAILS;
            };
            this.activeContacts = function activeContacts() {
                return this.newOrderStatus > newOrderService.statuses.CONTACTS;
            };
            this.activeFinish = function activeFinish() {
                return this.newOrderStatus > newOrderService.statuses.FINISH;
            };

            this.showStart = function showStart() {
                return this.newOrderStatus === newOrderService.statuses.START;
            };
            this.showCar = function showCar() {
                return this.newOrderStatus === newOrderService.statuses.CAR;
            };
            this.showDetails = function showDetails() {
                return this.newOrderStatus === newOrderService.statuses.DETAILS;
            };
            this.showContacts = function showContacts() {
                return this.newOrderStatus === newOrderService.statuses.CONTACTS;
            };
            this.showFinish = function showFinish() {
                return this.newOrderStatus === newOrderService.statuses.FINISH;
            };
            this.showCompleted = function showCompleted() {
                return this.newOrderStatus === newOrderService.statuses.COMPLETED;
            };

            this.goToStart = function goToStart() {
                this.newOrderStatus = newOrderService.statuses.START;
            };
            this.goToCar = function goToCar() {
                this.newOrderStatus = newOrderService.statuses.CAR;
            };
            this.goToDetails = function goToDetails() {
                this.newOrderStatus = newOrderService.statuses.DETAILS;
            };
            this.goToContacts = function goToContacts() {
                this.newOrderStatus = newOrderService.statuses.CONTACTS;
            };
            this.goToFinish = function goToFinish() {
                this.newOrderStatus = newOrderService.statuses.FINISH;
            };
            this.sendOrder = function sendOrder() {
                newOrderService.submit()
                    .then(function setCompleted() {
                        this.newOrderStatus = newOrderService.statuses.COMPLETED;
                        newOrderService.clear();
                    }.bind(this));
            };
        };
    }
})();