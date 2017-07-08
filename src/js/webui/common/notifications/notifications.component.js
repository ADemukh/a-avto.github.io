(function ProfileSettingsNotificationsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileSettingsNotifications', {
            controller: 'controllers.profilesettingsnotifications',
             bindings: {
                type: '<'
            },
            templateUrl: 'webui/common/notifications/notifications.tmpl.html'
        });
})();