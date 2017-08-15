(function NewOrderStartComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrderStart', {
            templateUrl: 'webui/new-order/start/start.tmpl.html',
			bindings: {
				next: '&'
			}
        });
})();