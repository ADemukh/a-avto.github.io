(function ProfileShopSettingsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettings', ProfileShopSettingsController);

	ProfileShopSettingsController.$inject = ['services.shop', 'services.notifications'];

	function ProfileShopSettingsController(shopService, notificationsService) {
		this.changeUserPassword = shopService.changePassword;
		this.changeUserNotifications = shopService.changeNotifications;
		this.getUserNotifications = notificationsService.getShopNotifications;
	}
})();