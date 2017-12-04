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

	NewOrderContactsController.$inject = ['services.neworder', 'services.common', 'services.identity', '$state'];

	function NewOrderContactsController(newOrderService, common, identity, $state) {
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
			this.isAnonUser = function isAnonUser() {
				return !identity.loggedIn();
			};
			this.saveUrlAndSignIn = function signIn() {
				identity.saveAttemptUrl();
				$state.go('anon.login');
			};
			this.resetEmailBusyError = function resetEmailBusyError() {
				this.contactsForm.email.$setValidity('emailbusy', true);
			};
			this.checkAndNext = function checkAndNext() {
				if (this.isAnonUser()) {
					if (this.orderContacts.email) {
						identity.checkEmailIsFree(this.orderContacts.email)
							.then(function emailIsFree() {
								this.next();
							}.bind(this))
							.catch(function emailIsBusy() {
								this.contactsForm.email.$setValidity('emailbusy', false);
							}.bind(this));
					} else {
						this.contactsForm.email.$setDirty();
					}
				} else {
					this.next();
				}
			};

			this.orderContacts = newOrderService.newOrder().contacts;
			this.orderContacts.email = this.orderContacts.email || identity.user.email;
			this.orderContacts.name = this.orderContacts.name || identity.user.name;
			this.orderContacts.city = this.orderContacts.city || identity.user.city;
			this.orderContacts.address = this.orderContacts.address || identity.user.address;
			this.orderContacts.phoneNumbers = this.orderContacts.phoneNumbers &&
				this.orderContacts.phoneNumbers.length &&
				this.orderContacts.phoneNumbers[0] ?
					this.orderContacts.phoneNumbers :
					[angular.copy(identity.user.phone)];

			this.phones = this.orderContacts.phoneNumbers.map(function mapNumber(number) {
				return {
					number: angular.copy(number)
				};
			});

			common.services.adress.getCities().then(function onGetCities(cities) {
				this.cities = cities;
			}.bind(this));
		};
	}
})();