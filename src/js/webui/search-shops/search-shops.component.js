(function SearchShopsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchShops', {
            controller: 'controllers.searchshops',
            templateUrl: 'webui/search-shops/search-shops.tmpl.html'
        })
        .controller('controllers.searchshops', SearchShopsController);

    SearchShopsController.$inject = ['services.neworder', 'services.common', 'screenSize'];

    function SearchShopsController(newOrderService, common, screenSize) {
        this.$onInit = function init() {
            this.getShops = function getShops() {
                common.services.shop.getShops(this.filters).then(function onGetShops(shops) {
                    this.shops = shops;
                }.bind(this));
            }.bind(this);
            this.getShops();

            this.filters = {
                shopCity: newOrderService.newOrder.shopCity,
                carMark: newOrderService.newOrder.car.mark,
                category: newOrderService.newOrder.category,
                isNewDetail: newOrderService.newOrder.isNewDetail
            };
            this.updateFilters = function onUpdateFilters(event) {
                if (event.filters) {
                    this.filters = event.filters;
                    newOrderService.newOrder.shopCity = event.filters.shopCity;
                    newOrderService.newOrder.car.mark = event.filters.carMark;
                    newOrderService.newOrder.category = event.filters.category;
                    newOrderService.newOrder.isNewDetail = event.filters.isNewDetail;
                    this.getShops();
                    this.filtersVisible = false;
                }
            };
            this.showFilters = function showFilters() {
                this.filtersVisible = true;
            };
            this.showMap = function showMap() {
                this.mapVisible = true;
                this.resultsVisible = false;
            };
            this.showResults = function showResults() {
                this.resultsVisible = true;
                this.mapVisible = false;
            };
            this.showResultsAndMap = function showResults() {
                this.resultsVisible = true;
                this.mapVisible = true;
            };

            if (screenSize.is('xs, sm')) {
                this.showMap();
            } else {
                this.showResultsAndMap();
            }

            screenSize.on('xs, sm', function goToMobileMode(isMatch) {
                if (isMatch) {
                    this.showMap();
                }
            }.bind(this));

            screenSize.on('md, lg', function goToMobileMode(isMatch) {
                if (isMatch) {
                    this.showResultsAndMap();
                }
            }.bind(this));
        };
    }
})();