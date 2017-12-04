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

            this.visibility = {
                filters: false,
                map: false,
                results: false
            };

            // filters
            this.filters = {
                shopCity: newOrderService.newOrder().filters.shopCity,
                carMark: newOrderService.newOrder().filters.carMark,
                spareType: newOrderService.newOrder().filters.spareType,
                newDetail: newOrderService.newOrder().filters.newDetail
            };

            this.openFilters = function toggleFilters() {
                this.saveVisibilityHistory();
                this.visibility.filters = true;
                if (screenSize.is('xs')) {
                    this.visibility.results = false;
                    this.visibility.map = false;
                } else if (screenSize.is('md lg')) {
                    this.toggleResultsAndMap();
                }
            };
            this.hideFilters = function hideFilters() {
                if (this.visibilityHistory) {
                    this.visibility = angular.copy(this.visibilityHistory);
                } else {
                    this.setupVisibility();
                }
            };
            this.toggleFilters = function toggleFilters() {
                if (this.visibility.filters) {
                    this.hideFilters();
                } else {
                    this.openFilters();
                }
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

            this.toggleMap = function toggleMap() {
                this.visibility.map = true;
                this.visibility.results = false;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };
            this.toggleResults = function toggleResults() {
                this.visibility.results = true;
                this.visibility.map = false;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };
            this.toggleResultsAndMap = function toggleResultsAndMap() {
                this.visibility.results = true;
                this.visibility.map = true;
                this.visibility.filters = false;
                this.saveVisibilityHistory();
            };

            this.isDesktop = function isDesktop() {
                return screenSize.is('md, lg');
            };
            this.isTablet = function isTablet() {
                return screenSize.is('sm');
            };
            this.isMobile = function isMobile() {
                return screenSize.is('xs');
            };
            this.showSwitch = function showSwitch() {
                return !this.isDesktop() && !(this.visibility.filters && screenSize.is('xs'));
            };

            this.setupVisibility = function setupVisibility() {
                if (this.isDesktop()) {
                    this.toggleResultsAndMap();
                } else {
                    this.toggleMap();
                }
                this.saveVisibilityHistory();
            };
            this.saveVisibilityHistory = function saveVisibilityHistory() {
                this.visibilityHistory = angular.copy(this.visibility);
            };

            this.setupVisibility();

            screenSize.on('xs, sm', function goToMobileMode(isMatch) {
                if (isMatch && this.visibility.map && this.visibility.results) {
                    this.toggleMap();
                }
            }.bind(this));

            screenSize.on('md, lg', function goToMobileMode(isMatch) {
                if (isMatch && !(this.visibility.map && this.visibility.results)) {
                    this.toggleResultsAndMap();
                }
            }.bind(this));
        };
    }
})();