(function ShopsSelectionComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qShopsSelection', {
            templateUrl: 'webui/search-shops/shops-selection/shops-selection.tmpl.html',
            controller: 'controllers.shopsselection',
            bindings: {
                isMobileState: '<',
                shops: '<'
            }
        })
        .controller('controllers.shopsselection', ShopsSelectionController);

        ShopsSelectionController.$inject = ['services.neworder', '$state'];

        function ShopsSelectionController(newOrderService, $state) {
            var vm;

            vm = this;
            this.$onInit = function onInit() {
                vm.selectedShops = newOrderService.newOrder().shops;
            };

            this.createNewOrder = function createNewOrder() {
                $state.go('new-order');
            };
        }
})();