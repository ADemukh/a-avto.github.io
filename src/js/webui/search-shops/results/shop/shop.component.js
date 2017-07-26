(function SearchShopsResultsShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchShopsResultsShop', {
            controller: 'controllers.searchshopsresultshop',
            templateUrl: 'webui/search-shops/results/shop/shop.tmpl.html',
            bindings: {
                shop: '<'
            }
        })
        .controller('controllers.searchshopsresultshop', function SearchShopsResultsShopController() {
            this.$onChanges = function onChanges(changes) {
                if (changes.shop) {
                    this.shop = angular.copy(this.shop);
                    this.shop.readonly = true;
                }
            };
        });
})();