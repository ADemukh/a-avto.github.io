(function SearchShopsResultsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchShopsResults', {
            templateUrl: 'webui/search/search-shops/results/results.tmpl.html',
            bindings: {
                loading: '<',
                shops: '<'
            }
        });
})();