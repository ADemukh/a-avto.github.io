(function UserLoginDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qUserLogin', {
            controller: 'controllers.userlogin',
            templateUrl: 'webui/user/user-login/user-login.tmpl.html'
        });
})();