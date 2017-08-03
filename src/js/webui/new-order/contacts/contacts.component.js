(function NewOrderContactsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNewOrderContacts', {
            templateUrl: 'webui/new-order/contacts/contacts.tmpl.html',
            controller: 'controllers.newordercontacts',
			bindings: {
				back: '&',
				next: '&'
			}
        })
		.controller('controllers.newordercontacts', NewOrderContactsController);

	NewOrderContactsController.$inject = ['services.neworder'];

	function NewOrderContactsController(newOrderService) {
		this.$onInit = function onInit() {
		};
		this.$onChanges = function onChanges(changes) {
		};
	};
})();