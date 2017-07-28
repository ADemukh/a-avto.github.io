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
				show: '<'
			}
		})
		.controller('controllers.searchshopsfilters', SearchShopsFiltersController);

	SearchShopsFiltersController.$inject = ['services.common'];

	function SearchShopsFiltersController(common) {
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
			if (changes.show) {
				this.show = angular.copy(this.show);
			}
		};
		this.applyFilters = function applyFilters() {
			this.onUpdate({
				$event: {
					filters: this.filters
				}
			});
		};
		this.cancel = function cancel() {
			this.onCancel();
		};
	}
})();