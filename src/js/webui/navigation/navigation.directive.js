/*
 * Custom
 */
(function NavigationDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qnavigation', NavigationDirective);

    function NavigationDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/navigation/navigation.tmpl.html',
                scope: {}
        };
    }
})();