(function AuthSocialComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qAuthSocial', {
            controller: 'controllers.authsocial',
            templateUrl: 'webui/auth-social/auth-social.tmpl.html'
        });
})();