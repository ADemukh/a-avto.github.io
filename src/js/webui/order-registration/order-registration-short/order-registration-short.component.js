(function OrderRegistrationShortComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationShort', {
            controller: 'controllers.orderregistrationshort',
            templateUrl: 'webui/order-registration/order-registration-short/order-registration-short.tmpl.html'
        })
        .controller('controllers.orderregistrationshort', OrderRegistrationShortController);

    OrderRegistrationShortController.$inject = ['services.neworder', '$state'];

    function OrderRegistrationShortController(newOrderService, $state) {
        this.$onInit = function onInit() {
            this.newOrder = angular.copy(newOrderService.newOrder);
            this.onCarSelect = function onCarSelect($event) {
                if ($event && $event.car) {
                    this.newOrder.car = $event.car;
                }
            };
            this.sendToAllShops = function sendToAllShops() {
                newOrderService.newOrder = this.newOrder;
                $state.go('public.order-registration-full');
            };
            this.searchShopsByMap = function searchShopsByMap() {
                newOrderService.newOrder = this.newOrder;
                $state.go('public.order-registration-search');
            };
        };
    }
})();