(function OrderRegistrationSearchFiltersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchFilters', {
            controller: 'controllers.orderregistrationsearchfilters',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-filters/order-registration-search-filters.tmpl.html',
            bindings: {
                filters: '<',
                onUpdate: '&'
            }
        });
})();