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

    function SearchShopsMapController() {
        var mapTarget;

        this.$onInit = function onInit() {
            this.loading = true;
            this.afterMapInit = function afterMapInit($mapTarget) {
                mapTarget = $mapTarget;
                this.loading = false;
            };
        };
        this.$onChanges = function onChanges() {
            if (this.shops && this.shops.length) {
                this.center = this.filters.shopCity;
                this.totalShops = this.shops && this.shops.length >= 0 ? this.shops.length : '';
                this.builtShops = this.shops.map(function buildShopGeo(shop) {
                    return {
                        geometry: {
                            type: 'Point',
                            coordinates: [shop.longitude, shop.latitude]
                        },
                        properties: {
                            name: shop.name,
                            hintContent: shop.name,
                            balloonContentHeader: '<h3>"' + shop.name + '"</h3>' + shopRating(shop.rating),
                            balloonContentFooter: '<button type="button" ><a href="#/order-registration" >Отправить заявку</a></button>',
                            balloonContentBody: '<h4>' + shop.address + '</h4>'
                        }
                    };
                });
            }

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
        };
        this.$onDestroy = function onDestroy() {
            if (mapTarget) {
                mapTarget.destroy();
            }
        };
    }
})();