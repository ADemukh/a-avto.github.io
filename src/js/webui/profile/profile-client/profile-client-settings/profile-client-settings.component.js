(function ProfileClientComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientSettings', {
            controller: 'controllers.profileclientsettings',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/profile-client-settings.tmpl.html'
        })
        .controller('controllers.profileclientsettings', ProfileClientSettingsController);

    ProfileClientSettingsController.$inject = ['services.client', 'services.notifications'];

    function ProfileClientSettingsController(clientService, notificationsService) {
        this.changeUserPhoto = clientService.changePhoto;
        this.changeUserPassword = clientService.changePassword;
        this.changeUserNotifications = clientService.changeNotifications;
        this.getClientNotifications = notificationsService.getClientNotifications;
    }
})();