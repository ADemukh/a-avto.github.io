(function ProfileShopSettingsMainControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettingsmain', ProfileShopSettingsMainController);

	ProfileShopSettingsMainController.$inject = ['services.shop', 'services.webui.alerts', 'services.identity', '$state', '$scope', '$uibModal'];

	function ProfileShopSettingsMainController(shopService, alerts, identityService, $state, $scope, $uibModal) {
		var vm;
		vm = this;

		vm.shop = {
			longitude: '',
			latitude: '',
			address: ''
		};

		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};

		vm.selectAddressOnMap = function selectAddressOnMap() {
			var modalInstance;

			modalInstance = $uibModal.open({
				animation: false,
				component: 'qSelectShopAddressOnMap',
				resolve: {
					options: function options() {
						return {
							longitude: vm.shop.longitude,
							latitude: vm.shop.latitude
						};
					}
				}
			});

			modalInstance.result.then(
				function selected(selectedAddress) {
					vm.shop.longitude = selectedAddress.longitude;
					vm.shop.latitude = selectedAddress.latitude;
					vm.shop.address = selectedAddress.address;
				},
				function closed() {
				});

		};

		this.$onInit = function onChanges() {
			this.user = {
					name: identityService.user.name,
					email: identityService.user.email,
					phone: identityService.user.phone,
					www: identityService.user.www,
					address: identityService.user.address,
					longitude: identityService.user.longitude,
					latitude: identityService.user.latitude,
					cities: identityService.user.cities,
					spareCategories: identityService.user.spareCategories,
					carMarks: identityService.user.carMarks,
			};
		};
		
		this.changeContactInfo = function changeContactInfo(isValid) {
			if (isValid) {
				shopService.changeContactInfo(vm.user)
					.then(function complete(response) {
						vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
					});
			}
		};
	}
})();