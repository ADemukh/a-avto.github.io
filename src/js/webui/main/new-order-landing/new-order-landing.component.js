(function MainNewOrderLandingControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qMainNewOrderLanding', {
            controller: 'controllers.orderregistrationshort',
            templateUrl: 'webui/main/new-order-landing/new-order-landing.tmpl.html'
        })
        .controller('controllers.orderregistrationshort', MainNewOrderLandingController);

    MainNewOrderLandingController.$inject = ['services.neworder', '$state', 'services.common'];

    function MainNewOrderLandingController(newOrderService, $state, common) {
        this.$onInit = function onInit() {
            this.newOrder = angular.copy(newOrderService.newOrder);
            common.services.car.getCars().then(function onGetCars(marks) {
                this.marks = marks;
            }.bind(this));
            common.services.car.getSpareTypes().then(function onGetSpareTypes(spareTypes) {
                this.spareTypes = spareTypes;
            }.bind(this));
            common.services.adress.getCities().then(function onGetCities(cities) {
                this.cities = cities;
            }.bind(this));
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