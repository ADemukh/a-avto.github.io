(function ProfileClientCarsComponentInit() {
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

        };
    }
})();