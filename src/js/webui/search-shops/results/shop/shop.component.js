(function SearchShopsResultsShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchShopsResultsShop', {
            controller: 'controllers.searchshopsresultshop',
            templateUrl: 'webui/search-shops/results/shop/shop.tmpl.html',
            bindings: {
                shop: '<',
                index: '<'
            }
        })
        .controller('controllers.searchshopsresultshop', function SearchShopsResultsShopController() {
            var DAY_TRANSLATIONS, vm;

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
            this.$onInit = function onInit() {
                vm.tabIds = {
                    home: 'HomeTab' + vm.index,
                    cities: 'CitiesTab' + vm.index,
                    spareTypes: 'SpareTypesTab' + vm.index,
                    cars: 'CarsTab' + vm.index,
                    workingHours: 'WorkingHoursTab' + vm.index
                };
                vm.visibleTab = 'home';
                vm.getDayTranslationKey = function getDayTranslationKey(day) {
                    return DAY_TRANSLATIONS[day];
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.shop) {
                    this.shop = angular.copy(this.shop);
                }
            };
        });
})();