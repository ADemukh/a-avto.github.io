(function ProfileSettingsNotificationsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profilesettingsnotifications', ProfileSettingsNotificationsController);

	ProfileSettingsNotificationsController.$inject = ['services.common','services.client', 'services.webui.alerts', 'services.identity'];

	function ProfileSettingsNotificationsController(common, clientService, alerts, identityService) {
		var vm;

		vm = this;

		this.$onInit = function onChanges() {
			this.notifications = common.services.notifications.returnNotifications(this.type)
			this.notifications.forEach(function eachNotification(notification) {
				notification.selected = identityService.user.notifications && identityService.user.notifications.indexOf(notification.type) >= 0;
			});
		};
		this.changeNotifications = function changeNotifications() {
			var selectedNotifications;

			selectedNotifications = [];
			this.notifications.forEach(function eachNotification(notification) {
				if (notification.selected) {
					selectedNotifications.push(notification.type);
				}
			});

			if (vm.type == 'client'){
			clientService.changeNotifications(selectedNotifications)
				.then(function complete(response) {
					vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
				});
			}
			else if (vm.type == 'shop'){
			common.services.shop.changeNotifications(selectedNotifications)
				.then(function complete(response) {
					vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
				});
			}
		};
	}
})();