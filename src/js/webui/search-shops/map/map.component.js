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

        SearchShopsMapController.$inject = ['services.geoobjects'];

    function SearchShopsMapController(geoObjectsService) {
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
            if (vm.shops && vm.shops.length) {
                vm.center = vm.filters.shopCity;
                vm.totalShops = vm.shops && vm.shops.length >= 0 ? vm.shops.length : '';
                vm.builtShops = vm.shops.map(function buildShopGeo(shop) {
                    return {
                        geometry: {
                            type: 'Point',
                            coordinates: [shop.longitude, shop.latitude]
                        },
                        properties: {
                            name: shop.name,
                            shopId: shop._id,
                            hintContent: shop.name,
                            balloonContentHeader: '<h3>"' + shop.name + '"</h3>' + shopRating(shop.rating),
                            balloonContentFooter: '<button type="button" ><a href="#/order-registration" >Отправить заявку</a></button>',
                            balloonContentBody: '<h4>' + shop.address + '</h4>'
                        },
                        options: {
                            iconColor: shop.isSeleced ? '#f00' : '#000'
                        }
                    };
                });
            }
        };

        function shopRating(rating) {
            var currentRating, html, i, max;

            currentRating = rating > 0 ? rating : 0;
            max = 5;
            html = '<ul class="star-rating readonly">';
            for (i = 0; i < max; i += 1) {
                html += '<li class="star' + (i < currentRating ? ' filled' : '') + '" ><i class="fa fa-star"></i></li>';
            }
            html += '</ul>';

            return html;
        }

        this.$onDestroy = function onDestroy() {
            if (mapTarget) {
                mapTarget.destroy();
            }
        };
    }
})();