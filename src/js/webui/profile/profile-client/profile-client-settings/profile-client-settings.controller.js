(function ProfileClientSettingsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientsettings', ProfileClientSettingsController);

	ProfileClientSettingsController.$inject = ['services.client', 'services.notifications'];

	function ProfileClientSettingsController(clientService, notificationsService) {
		this.changeUserPassword = clientService.changePassword;
		this.changeUserNotifications = clientService.changeNotifications;
		this.getClientNotifications = notificationsService.getClientNotifications;
	}
})();