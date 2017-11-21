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

	NewOrderContactsController.$inject = ['services.neworder', 'services.common'];

	function NewOrderContactsController(newOrderService, common) {
		this.$onInit = function onInit() {
			this.changePhoneNumber = function changePhoneNumber(index) {
				this.orderContacts.phoneNumbers[index] = this.phones[index].number;
			}
			this.addPhoneNumber = function addPhoneNumber() {
				this.phones.push({});
			};
			this.clearPhoneNumber = function clearPhoneNumber(index) {
				this.orderContacts.phoneNumbers.splice(index, 1);
				this.phones.splice(index, 1);
			};

			this.orderContacts = newOrderService.newOrder.contacts;
			this.phones = newOrderService.newOrder.contacts.phoneNumbers.map(function mapNumber(number) {
				return { number: angular.copy(number) };
			});

			common.services.adress.getCities().then(function onGetCities(cities) {
				this.cities = cities;
			}.bind(this));
		};
	}
})();