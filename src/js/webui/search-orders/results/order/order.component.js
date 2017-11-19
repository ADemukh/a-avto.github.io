(function SearchOrdersResultsOrderComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchOrdersResultsOrder', {
            controller: 'controllers.searchordersresultorder',
            templateUrl: 'webui/search-orders/results/order/order.tmpl.html',
            bindings: {
                order: '<',
                index: '<'
            }
        })
        .controller('controllers.searchordersresultorder', function SearchOrdersResultsOrderController() {
            var vm;

            vm = this;
            this.$onInit = function onInit() {
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.order) {
                    this.order = angular.copy(this.order);
                }
            };
        });
})();