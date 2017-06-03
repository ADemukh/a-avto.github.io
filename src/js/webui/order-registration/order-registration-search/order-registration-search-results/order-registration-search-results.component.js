(function OrderRegistrationSearchResultsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchResults', {
            controller: 'controllers.orderregistrationsearchresults',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-results/order-registration-search-results.tmpl.html',
            bindings: {
                shops: '<'
            }
        });
})();