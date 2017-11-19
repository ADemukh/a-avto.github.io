(function SearchOrdersFiltersComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchOrdersFiltersContent', {
			controller: 'controllers.searchordersfilterscontent',
			templateUrl: 'webui/search-orders/filters/content/content.tmpl.html',
			bindings: {
				filters: '<',
				onApply: '&',
				onCancel: '&'
			}
		})
		.controller('controllers.searchordersfilterscontent', SearchOrdersFiltersContentController);

	SearchOrdersFiltersContentController.$inject = ['services.common'];

    // TO IMPLEMENT!
	function SearchOrdersFiltersContentController(common) {
		this.$onInit = function onInit() {
			// order service to be implemented

			// common.services.order.getStatuses().then(function onGetStatuses(statuses) {
			// 	this.statuses = statuses;
			// }.bind(this));

			this.statuses = ['pending', 'opened', 'resolved', 'reopened'];

			this.apply = function applyFilters() {
				this.onApply({
					$event: {
						filters: this.filters
					}
				});
			};
			this.cancel = function cancelFilters() {
				this.onCancel();
			};
		};
		this.$onChanges = function onChanges(changes) {
			if (changes.filters) {
				this.filters = angular.copy(this.filters);
			}
		};
	}
})();