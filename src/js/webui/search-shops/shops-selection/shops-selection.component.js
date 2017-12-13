(function ShopsSelectionComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qShopsSelection', {
            templateUrl: 'webui/search-shops/shops-selection/shops-selection.tmpl.html',
            controller: 'controllers.shopsselection'
        })
        .controller('controllers.shopsselection', ShopsSelectionController);

        ShopsSelectionController.$inject = ['services.neworder'];

        function ShopsSelectionController(newOrderService) {
            var vm;

            vm = this;
            this.$onInit = function onInit() {
                vm.selectedShops = newOrderService.newOrder().shops;
            };
        }
})();