(function ProfileSettingsNotificationsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileSettingsNotifications', {
            controller: 'controllers.profilesettingsnotifications',
            bindings: {
                changeUserNotifications: '<',
                getUserNotifications: '<'
            },
            templateUrl: 'webui/common/notifications/notifications.tmpl.html'
        })

        .controller('controllers.profilesettingsnotifications', ProfileSettingsNotificationsController);

    ProfileSettingsNotificationsController.$inject = ['services.common', 'services.client', 'services.webui.alerts', 'services.identity', 'services.notifications'];

    function ProfileSettingsNotificationsController(common, clientService, alerts, identityService, notificationsService) {
        var vm;

        vm = this;
        vm.$onInit = function onInit() {
            vm.getUserNotifications().then(function onGetUserNotifications(notifications) {
                vm.notifications = notifications;
                vm.notifications.forEach(function eachNotification(notification) {
                    notification.selected = identityService.user.notifications && identityService.user.notifications.indexOf(notification.type) >= 0;
                });
            });
        };

        vm.changeNotifications = function changeNotifications() {
            var selectedNotifications;
            selectedNotifications = [];
            vm.notifications.forEach(function eachNotification(notification) {
                if (notification.selected) {
                    selectedNotifications.push(notification.type);
                }
            });
            vm.changeUserNotifications(selectedNotifications)
                .then(function complete(response) {
                    vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                });
        };
    }
})();