(function NewOrderCarMyComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qNewOrderCarMy', {
			templateUrl: 'webui/new-order/car/my/car-my.tmpl.html',
			bindings: {
				car: '<'
			}
		});
})();