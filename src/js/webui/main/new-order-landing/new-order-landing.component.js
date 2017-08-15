(function MainNewOrderLandingControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qMainNewOrderLanding', {
            controller: 'controllers.orderregistrationshort',
            templateUrl: 'webui/main/new-order-landing/new-order-landing.tmpl.html'
        })
        .controller('controllers.orderregistrationshort', MainNewOrderLandingController);

    MainNewOrderLandingController.$inject = ['services.neworder', '$state'];

    function MainNewOrderLandingController(newOrderService, $state) {
        this.$onInit = function onInit() {
            this.newOrder = angular.copy(newOrderService.newOrder);
            this.onCarSelect = function onCarSelect($event) {
                if ($event && $event.car) {
                    this.newOrder.car = $event.car;
                }
            };
            this.sendToAllShops = function sendToAllShops() {
                newOrderService.newOrder = this.newOrder;
                $state.go('client.new-order');
            };
            this.searchShopsByMap = function searchShopsByMap() {
                newOrderService.newOrder = this.newOrder;
                $state.go('search-shops');
            };
        };
    }
})();