(function UserLoginDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qUserLogin', UserLoginDirective);

    function UserLoginDirective() {
        return {
                restrict: 'E',
                controller: 'userLogin',
                controllerAs: 'vm',
                templateUrl: 'webui/user/user-login.tmpl.html',
                scope: {}
        };
    }
})();