(function OrderRegistrationSearchShopControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearchshop', OrderRegistrationSearchShopController);

	function OrderRegistrationSearchShopController() {
		this.$onChanges = function onChanges(changes) {
			if (changes.shop) {
				this.shop = angular.copy(this.shop);
				this.shop.readonly = true;
			}
		};
	}
})();