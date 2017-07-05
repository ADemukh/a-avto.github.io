(function OrderRegistrationSearchFiltersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchFilters', {
            controller: 'controllers.orderregistrationsearchfilters',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-filters/order-registration-search-filters.tmpl.html',
            bindings: {
                filters: '<',
                onUpdate: '&'
            }
        })
        .controller('controllers.orderregistrationsearchfilters', OrderRegistrationSearchFiltersController);

	OrderRegistrationSearchFiltersController.$inject = ['services.common'];

	function OrderRegistrationSearchFiltersController(common) {
		this.$onInit = function onInit() {
			common.services.adress.getCities().then(function onGetCities(cities) {
				this.cities = cities;
			}.bind(this));
			common.services.car.getCars().then(function onGetCars(carMarks) {
				this.carMarks = carMarks;
			}.bind(this));
			common.services.category.getCategories().then(function onGetCategories(categories) {
				this.categories = categories;
			}.bind(this));
		};
		this.$onChanges = function onChanges(changes) {
			if (changes.filters) {
				this.filters = angular.copy(this.filters);
				this.filters.newDetail = true;
				this.filters.worksNow = true;
				this.filters.worksOnWeekend = true;
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