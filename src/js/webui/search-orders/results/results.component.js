(function SearchOrdersResultsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchOrdersResults', {
            templateUrl: 'webui/search-orders/results/results.tmpl.html',
            bindings: {
                orders: '<',
                loading: '<'
            }
        });
})();