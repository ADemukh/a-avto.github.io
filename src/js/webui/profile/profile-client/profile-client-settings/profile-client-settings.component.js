(function ProfileClientComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qProfileClientSettings', {
            controller: 'controllers.profileclientsettings',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/profile-client-settings.tmpl.html'
        });
})();