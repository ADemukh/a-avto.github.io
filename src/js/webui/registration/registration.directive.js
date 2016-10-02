(function RegistrationDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qRegistration', RegistrationDirective);

    function RegistrationDirective() {
        return {
                restrict: 'E',
                controller: 'registration',
                controllerAs: 'vm',
                templateUrl: 'webui/registration/registration.tmpl.html',
                scope: {}
        };
    }
})();