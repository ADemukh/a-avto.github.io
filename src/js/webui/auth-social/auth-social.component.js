(function AuthSocialComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qAuthSocial', {
            controller: 'controllers.authsocial',
            templateUrl: 'webui/auth-social/auth-social.tmpl.html'
        });
})();