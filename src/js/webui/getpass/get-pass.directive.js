(function GetPassDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qGetPass', GetPassDirective);

    function GetPassDirective() {
        return {
                restrict: 'E',
                controller: 'getPass',
                controllerAs: 'am',
                templateUrl: 'webui/getpass/get-pass.tmpl.html',
                scope: {}
        };
    }
})();