(function ProfileSettingsChangePasswordComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileSettingsChangePassword', {
            controller: 'controllers.profilesettingschangepassword',
            bindings: {
                type: '<'
            },
            templateUrl: 'webui/common/change-password/change-password.tmpl.html'
        });
})();