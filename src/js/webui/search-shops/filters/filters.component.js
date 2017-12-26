(function SearchShopsFiltersComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchShopsFilters', {
			controller: 'controllers.searchshopsfilters',
			templateUrl: 'webui/search-shops/filters/filters.tmpl.html',
			bindings: {
				filters: '<',
				onUpdate: '&',
				onCancel: '&',
				loading: '<',
				shops: '<',
				show: '<'
			}
		})
		.controller('controllers.searchshopsfilters', SearchShopsFiltersController);

	SearchShopsFiltersController.$inject = ['screenSize', '$uibModal'];

	function SearchShopsFiltersController(screenSize, $uibModal) {
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
			this.applyTabletFilters = function applyTabletFilters(event) {
				this.onUpdate({
					$event: event
				});
			};
			this.cancelTabletFilters = function cancelTabletFilters() {
				this.onCancel();
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
				if (screenSize.is('sm')) {
					showFiltersByModal.call(this);
				}
				this.show = angular.copy(this.show);
			}

			function showFiltersByModal() {
				var modalInstance;

				modalInstance = $uibModal.open({
					animation: false,
					component: 'qSearchShopsFiltersModal',
					resolve: {
						filters: function filters() {
							return this.filters;
						}.bind(this)
					}
				});

				modalInstance.result.then(
					function applied(event) {
						this.applyTabletFilters(event);
					}.bind(this),
					function canceled() {
						this.cancelTabletFilters();
					}.bind(this));
			}
		};
	}
})();