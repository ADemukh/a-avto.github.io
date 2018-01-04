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
        .controller('controllers.searchshopsresultshop', SearchShopsResultsShopController);

        SearchShopsResultsShopController.$inject = ['_', 'services.neworder', 'services.geoobjects', '$state'];

        function SearchShopsResultsShopController(_, newOrderService, geoObjectsService, $state) {
            var DAY_TRANSLATIONS, newOrder, vm;

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
                vm.tabs = {
                    groupId: 'tabs' + vm.index,
                    homeId: 'HomeTab' + vm.index,
                    citiesId: 'CitiesTab' + vm.index,
                    spareTypesId: 'SpareTypesTab' + vm.index,
                    carsId: 'CarsTab' + vm.index,
                    workingHoursId: 'WorkingHoursTab' + vm.index
                };
                vm.visibleTab = 'home';
                vm.getDayTranslationKey = function getDayTranslationKey(day) {
                    return DAY_TRANSLATIONS[day];
                };
                newOrder = newOrderService.newOrder();
                vm.shop.isSelected = _.includes(newOrder.shops, vm.shop._id);
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.shop) {
                    this.shop = angular.copy(this.shop);
                }
            };
            this.changeSelection = function changeSelection() {
                if (vm.shop.isSelected) {
                    newOrder.shops.push(vm.shop._id);
                    geoObjectsService.select(vm.shop._id);
                } else {
                    _.remove(newOrder.shops, function rmSelected(shopId) {
                        return shopId === vm.shop._id;
                    });
                    geoObjectsService.unselect(vm.shop._id);
                }
            };
            this.createNewOrder = function createNewOrder() {
                if (newOrder.shops.length) {
                    _.remove(newOrder.shops, function removeAll() {
                        return true;
                    });
                }
                newOrder.shops.push(vm.shop._id);

                $state.go('new-order');
            };
        }
})();