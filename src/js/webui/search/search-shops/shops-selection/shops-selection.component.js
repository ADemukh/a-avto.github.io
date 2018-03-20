(function ShopsSelectionComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qShopsSelection', {
            templateUrl: 'webui/search/search-shops/shops-selection/shops-selection.tmpl.html',
            controller: 'controllers.shopsselection',
            bindings: {
                isMobileState: '<',
                shops: '<'
            }
        })
        .controller('controllers.shopsselection', ShopsSelectionController);

        ShopsSelectionController.$inject = ['_', 'services.neworder', '$state'];

        function ShopsSelectionController(_, newOrderService, $state) {
            var newOrder, vm;

            vm = this;
            this.$onInit = function onInit() {
                newOrder = newOrderService.newOrder();
                vm.selectedShops = newOrderService.newOrder().shops;
            };

            this.createNewOrder = function createNewOrder() {
                if (!newOrder.shops.length) {
                    _.forEach(vm.shops, function copyFoundShopIds(shop) {
                        newOrder.shops.push(shop._id);
                    });
                }

                $state.go('new-order');
            };
        }
})();