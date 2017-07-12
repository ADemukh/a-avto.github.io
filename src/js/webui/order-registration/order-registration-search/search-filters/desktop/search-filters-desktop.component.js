(function OrderRegistrationSearchFiltersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchFiltersDesktop', {
            controller: 'controllers.orderregistrationsearchfiltersdesktop',
            templateUrl: 'webui/order-registration/order-registration-search/search-filters/desktop/search-filters-desktop.tmpl.html',
            bindings: {
                filters: '<',
                onUpdate: '&'
            }
        })
        .controller('controllers.orderregistrationsearchfiltersdesktop', OrderRegistrationSearchFiltersDesktopController);

	OrderRegistrationSearchFiltersDesktopController.$inject = ['services.common'];

	function OrderRegistrationSearchFiltersDesktopController(common) {
		this.$onInit = function onInit() {

		};
		this.$onChanges = function onChanges(changes) {
			if (changes.filters) {
				// this.filters = angular.copy(this.filters);
			}
		};
		this.applyFilters = function applyFilters() {
			this.onUpdate({
				$event: {
					filters: this.filters
				}
			});
		};
	}
})();