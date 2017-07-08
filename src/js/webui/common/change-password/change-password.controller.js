(function ProfileSettingsChangePasswordControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profilesettingschangepassword', ProfileSettingsChangePasswordController);

	ProfileSettingsChangePasswordController.$inject = ['services.common','services.client', 'services.webui.alerts'];

	function ProfileSettingsChangePasswordController(common, clientService, alerts) {
		var vm;

		vm = this;

		vm.changePassword = function changePassword(passwordForm) {
			if (passwordForm.$valid) {
				if (vm.type == 'client'){
				clientService.changePassword(vm.user.password)
					.then(function complete(response) {
						vm.alerts = response.data.success ?
							[alerts.success(response.data.message ? response.data.message : 'Пароль успешно изменен.')] :
							[alerts.danger(response.data.error ? response.data.error : 'При изменении пароля возникла ошибка.')];
						vm.user = {};
						passwordForm.$setPristine();
					});
				}
				else if (vm.type == 'shop'){
				common.services.shop.changePassword(vm.user.password)
					.then(function complete(response) {
						vm.alerts = response.data.success ?
							[alerts.success(response.data.message ? response.data.message : 'Пароль успешно изменен.')] :
							[alerts.danger(response.data.error ? response.data.error : 'При изменении пароля возникла ошибка.')];
						vm.user = {};
						passwordForm.$setPristine();
					});
				}
		}
		};
	}
})();