(function SearchShopsMapComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchShopsMap', {
            controller: 'controllers.searchshopsmap',
            templateUrl: 'webui/search-shops/map/map.tmpl.html',
            bindings: {
                filters: '<',
                shops: '<'
            }
        })
        .controller('controllers.searchshopsmap', SearchShopsMapController);

    SearchShopsMapController.$inject = [
        '$scope',
        '$state',
        '$translate',
        'services.neworder',
        'services.geoobjects',
        'templateLayoutFactory'
    ];

    function SearchShopsMapController($scope, $state, $translate, newOrderService, geoObjectsService, templateLayoutFactory) {
        var mapTarget, vm;

        vm = this;
        this.$onInit = function onInit() {
            this.loading = true;
            this.afterMapInit = function afterMapInit($mapTarget) {
                mapTarget = $mapTarget;
                this.loading = false;
            };
        };

        this.getGeoObjects = function getGeoObject(target) {
            geoObjectsService.add(target);
        };

        this.$onChanges = function recalculateMap() {
            if (vm.shops) {
                vm.center = vm.filters.shopCity;
                vm.totalShops = vm.shops && vm.shops.length >= 0 ? vm.shops.length : '';
                vm.builtShops = vm.shops.map(function buildShopGeo(shop) {
                    return {
                        geometry: {
                            type: 'Point',
                            coordinates: [shop.longitude, shop.latitude]
                        },
                        properties: {
                            shop: shop,
                            sendButtonText: $translate.instant('SEND')
                        },
                        options: {
                            iconColor: shop.isSelected ? '#f00' : '#000'
                        }
                    };
                });
            }
        };

        this.$onDestroy = function onDestroy() {
            if (mapTarget) {
                mapTarget.destroy();
            }
        };

        function changeSelection() {
            var shop;

            shop = geoObjectsService.getProcessedShop();

            if (shop.isSelected) {
                newOrderService.removeShop(shop._id);
                geoObjectsService.unselect(shop._id);
            } else {
                newOrderService.addShop(shop._id);
                geoObjectsService.select(shop._id);
            }
            shop.isSelected = !shop.isSelected;

            $scope.$apply();
        }

        function createNewOrder() {
            newOrderService.dropShopSelection();
            newOrderService.addShop(geoObjectsService.getProcessedShop()._id);
            $state.go('new-order');
        }

        this.balloonOverrides = {
            build: function build() {
                var BalloonContentLayout, selectionButtonText, shop;

                shop = this.getData().properties.get('shop');
                geoObjectsService.setProcessedShop(shop);

                BalloonContentLayout = templateLayoutFactory.get('CustomBalloonContentLayout');
                BalloonContentLayout.superclass.build.call(this);
                geoObjectsService.checkSelection(shop._id);

                angular.element(document.getElementById('geo-object-select')).bind('click', changeSelection);
                angular.element(document.getElementById('geo-object-new-order')).bind('click', createNewOrder);

                geoObjectsService.updateGeoObjectRating();
            },
            clear: function clear() {
                var BalloonContentLayout;

                angular.element(document.getElementById('geo-object-select')).unbind('click', changeSelection);
                angular.element(document.getElementById('geo-object-new-order')).unbind('click', createNewOrder);
                BalloonContentLayout = templateLayoutFactory.get('CustomBalloonContentLayout');
                BalloonContentLayout.superclass.clear.call(this);
            }
        };
    }
})();