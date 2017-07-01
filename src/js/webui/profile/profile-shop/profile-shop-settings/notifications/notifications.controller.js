(function ProfileShopSettingsNotificationsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettingsnotifications', ProfileShopSettingsNotificationsController);

	ProfileShopSettingsNotificationsController.$inject = ['services.common', 'services.webui.alerts', 'services.identity'];

	function ProfileShopSettingsNotificationsController(common, alerts, identityService) {
		var vm;

		vm = this;

		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};

		vm.$onInit = function onInit() {
			vm.notifications = [{
				name: 'Отправлять мне SMS, когда приходят ответы поставщиков по моим заявкам',
				type: 'OrderFollowed'
				}, {
				name: 'Отправлять мне e-mail при смене статусов',
				type: 'OrderStatusChanged'
				}, {
				name: 'Отправлять мне e-mail при закрытии заявки',
				type: 'OrderClosed'
			}];

			vm.notifications.forEach(function eachNotification(notification) {
				notification.selected = identityService.user.notifications && identityService.user.notifications.indexOf(notification.type) >= 0;
			});

			vm.changeNotifications = function changeNotifications() {
				var selectedNotifications;

				selectedNotifications = [];
				vm.notifications.forEach(function eachNotification(notification) {
					if (notification.selected) {
						selectedNotifications.push(notification.type);
					}
				});

				common.services.shop.changeNotifications(selectedNotifications)
					.then(function complete(response) {
						vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
					});
			};
		};
	}
})();