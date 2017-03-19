(function ProfileClientSettingsMainComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientSettingsMain', {
            controller: 'controllers.profileclientsettingsmain',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/main/main.tmpl.html'
        });
})();