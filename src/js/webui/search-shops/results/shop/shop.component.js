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
            var vm, DAY_TRANSLATIONS;

            DAY_TRANSLATIONS = {
                monday: 'MONDAY',
                tuesday: 'TUESDAY',
                wednesday: 'WEDNESDAY',
                thursday: 'THURSDAY',
                friday: 'FRIDAY',
                saturday: 'SATURDAY',
                sunday: 'SUNDAY'
            };

            vm = this;
            this.$onChanges = function onChanges(changes) {
                if (changes.shop) {
                    this.shop = angular.copy(this.shop);
                    this.shop.readonly = true;
                }
            };

            vm.getDayTranslationKey = function getDayTranslationKey(day) {
                return DAY_TRANSLATIONS[day];
            };
        });
})();