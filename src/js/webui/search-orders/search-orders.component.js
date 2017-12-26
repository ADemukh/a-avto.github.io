(function SearchOrdersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSearchOrders', {
            controller: 'controllers.searchorders',
            templateUrl: 'webui/search-orders/search-orders.tmpl.html'
        })
        .controller('controllers.searchorders', SearchOrdersController);

    SearchOrdersController.$inject = ['services.common', 'screenSize'];

    function SearchOrdersController(common, screenSize) {
        this.$onInit = function init() {
            this.getOrders = function getOrders() {
                this.loading = true;
                common.services.order.getOrders(this.filters).then(function onGetOrders(orders) {
                    this.orders = orders;
                    this.loading = false;
                }.bind(this));
            }.bind(this);
            this.getOrders();

            this.visibility = {
                filters: false,
                results: false
            };

            this.updateFilters = function onUpdateFilters(event) {
                if (event.filters) {
                    this.filters = angular.copy(event.filters);
                    this.getOrders();
                    this.hideFilters();
                }
            };

            this.openFilters = function toggleFilters() {
                this.saveVisibilityHistory();
                this.visibility.filters = true;
                if (screenSize.is('xs, sm')) {
                    this.visibility.results = false;
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
            this.toggleResults = function toggleResults() {
                this.visibility.results = true;
                this.visibility.filters = false;
            };

            this.showSwitch = function showSwitch() {
                return !this.isDesktop() && !(this.visibility.filters && screenSize.is('xs, sm'));
            };

            this.setupVisibility = function setupVisibility() {
                this.toggleResults();
                this.saveVisibilityHistory();
            };
            this.saveVisibilityHistory = function saveVisibilityHistory() {
                this.visibilityHistory = angular.copy(this.visibility);
            };

            this.setupVisibility();

            this.isDesktop = function isDesktop() {
                return screenSize.is('md, lg');
            };
            // showSwitch recalculating
            screenSize.on('sm, md', this.showSwitch.bind(this));
        };
    }
})();