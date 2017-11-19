(function SearchOrdersFiltersComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchOrdersFilters', {
			controller: 'controllers.searchordersfilters',
			templateUrl: 'webui/search-orders/filters/filters.tmpl.html',
			bindings: {
				filters: '<',
				onUpdate: '&',
				onCancel: '&',
				show: '<'
			}
		})
		.controller('controllers.searchordersfilters', SearchOrdersFiltersController);

	function SearchOrdersFiltersController() {
		this.$onInit = function onInit() {
			this.applyDesktopFilters = function applyDesktopFilters(event) {
				this.onUpdate({
					$event: event
				});
				this.isOpenDesktopFilters = false;
			};
			this.cancelDesktopFilters = function cancelMobileFilters() {
				this.onCancel();
				this.isOpenDesktopFilters = false;
			};
			this.applyMobileFilters = function applyMobileFilters(event) {
				this.onUpdate({
					$event: event
				});
			};
			this.cancelMobileFilters = function cancelMobileFilters() {
				this.onCancel();
			};
		};
		this.$onChanges = function onChanges(changes) {
			if (changes.filters) {
				this.filters = angular.copy(this.filters);
			}
			if (changes.show && this.show) {
				this.show = angular.copy(this.show);
			}
		};
	}
})();