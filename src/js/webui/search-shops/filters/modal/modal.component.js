(function SelectShopAddressOnMapComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSearchShopsFiltersModal', {
			controller: 'controllers.searchshopsfiltersmodal',
			templateUrl: 'webui/search-shops/filters/modal/modal.tmpl.html',
			bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
			}
		})
		.controller('controllers.searchshopsfiltersmodal', SearchShopsFiltersModalController);

	function SearchShopsFiltersModalController() {
		this.$onInit = function onInit() {
			this.apply = function apply(event) {
				this.close({ $value: event });
			};
			this.cancel = function cancel() {
				this.dismiss({ $value: 'cancel' });
			};
		};
	}
})();