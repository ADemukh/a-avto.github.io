(function ProfileClientSettingsChangePasswordControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientsettingschangepassword', ProfileClientSettingsChangePasswordController);

	ProfileClientSettingsChangePasswordController.$inject = ['services.client', 'services.webui.alerts'];

	function ProfileClientSettingsChangePasswordController(clientService, alerts) {
		var vm;

		vm = this;
		vm.changePassword = function changePassword(passwordForm) {
			if (passwordForm.$valid) {
				clientService.changePassword(vm.user.password)
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