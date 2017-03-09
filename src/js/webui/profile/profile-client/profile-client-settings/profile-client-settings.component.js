(function ProfileClientComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientSettings', {
            controller: 'controllers.profileclientsettings',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/profile-client-settings.tmpl.html'
        });
})();