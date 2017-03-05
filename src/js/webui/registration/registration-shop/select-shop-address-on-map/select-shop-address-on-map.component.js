(function SelectShopAddressOnMapComponentInit() {
	'use strict';

	angular.module('webui')
		.component('qSelectShopAddressOnMap', {
			controller: 'controllers.selectshopaddressonmap',
			bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
			},
			templateUrl: 'webui/registration/registration-shop/select-shop-address-on-map/select-shop-address-on-map.tmpl.html'
		});
})();