(function ProfileShopSettingsChangePasswordControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettingschangepassword', ProfileShopSettingsChangePasswordController);

	ProfileShopSettingsChangePasswordController.$inject = ['services.shop', 'services.webui.alerts'];

	function ProfileShopSettingsChangePasswordController(shopService, alerts) {
		var vm;

		vm = this;
		vm.changePassword = function changePassword(passwordForm) {
			if (passwordForm.$valid) {
				shopService.changePassword(vm.user.password)
					.then(function complete(response) {
						vm.alerts = response.data.success ?
							[alerts.success(response.data.message ? response.data.message : 'Пароль успешно изменен.')] :
							[alerts.danger(response.data.error ? response.data.error : 'При изменении пароля возникла ошибка.')];
						vm.user = {};
						passwordForm.$setPristine();
					});
			}
		};
	}
})();