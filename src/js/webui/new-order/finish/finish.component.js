(function NewOrderFinishComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrderFinish', {
            templateUrl: 'webui/new-order/finish/finish.tmpl.html',
            controller: 'controllers.neworderfinish',
			bindings: {
				back: '&',
				send: '&'
			}
        })
		.controller('controllers.neworderfinish', NewOrderFinishController);

	NewOrderFinishController.$inject = ['services.neworder'];

	function NewOrderFinishController(newOrderService) {
		this.$onInit = function onInit() {
			this.order = newOrderService.newOrder;
		};
	}
})();