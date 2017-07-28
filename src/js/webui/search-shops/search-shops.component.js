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
            this.visibility = {
                filters: false,
                map: false,
                results: false
            };
            this.updateFilters = function onUpdateFilters(event) {
                if (event.filters) {
                    this.filters = angular.copy(event.filters);
                    this.getShops();
                    this.hideFilters();
                }
            };
            this.closeFilters = function onCloseFilters() {
                this.hideFilters();
            };
            this.showFilters = function showFilters() {
                this.saveVisibilityHistory();
                this.visibility.filters = true;
                if (screenSize.is('xs')) {
                    this.visibility.results = false;
                    this.visibility.map = false;
                } else if (screenSize.is('md lg')) {
                    this.showResultsAndMap();
                }
            };
            this.hideFilters = function hideFilters() {
                if (this.visibilityHistory) {
                    this.visibility = angular.copy(this.visibilityHistory);
                } else {
                    this.setupVisibility();
                }
            };
            this.showMap = function showMap() {
                this.visibility.map = true;
                this.visibility.results = false;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };
            this.showResults = function showResults() {
                this.visibility.results = true;
                this.visibility.map = false;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };
            this.showResultsAndMap = function showResults() {
                this.visibility.results = true;
                this.visibility.map = true;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };
            this.isDesktopMode = function isDesktopMode() {
                return this.visibility.results && this.visibility.map;
            };

            this.setupVisibility = function setupVisibility() {
                if (screenSize.is('xs, sm')) {
                    this.showMap();
                } else {
                    this.showResultsAndMap();
                }
                this.saveVisibilityHistory();
            };
            this.saveVisibilityHistory = function saveVisibilityHistory() {
                this.visibilityHistory = angular.copy(this.visibility);
            };

            this.setupVisibility();

            screenSize.on('xs, sm', function goToMobileMode(isMatch) {
                if (isMatch && this.isDesktopMode()) {
                    this.showResults();
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