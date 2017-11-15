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

	NewOrderContactsController.$inject = ['services.neworder', 'services.identity', 'services.client'];

	function NewOrderContactsController(newOrderService, identityService, clientService) {
		this.$onInit = function onInit() {
			this.user = {
                name: identityService.user.name,
                email: identityService.user.email,
                phone: identityService.user.phone
            };
            this.changeContactInfo = function changeContactInfo(isValid) {
                if (isValid) {
                    clientService.changeContactInfo(vm.user)
                        .then(function complete(response) {
                            vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                        });
                }
            };
		};
		this.$onChanges = function onChanges(changes) {
		};
	}
})();