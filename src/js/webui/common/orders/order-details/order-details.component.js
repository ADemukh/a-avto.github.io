(function ProfileClientOrdersItemComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderDetails', {
            controller: 'controllers.orderdetails',
            templateUrl: 'webui/common/orders/order-details/order-details.tmpl.html'
        })
        .controller('controllers.orderdetails', OrderDetailsController);

    OrderDetailsController.$inject = ['$stateParams', 'services.order'];

    function OrderDetailsController($stateParams, orderService) {
        var vm;

        vm = this;
        this.$onInit = function onInit() {
            vm.loading = true;

            orderService.getOrderById($stateParams.orderId)
                .then(function gotOrder(order) {
                    vm.order = order;
                    vm.loading = false;
                });
        };
    }
})();