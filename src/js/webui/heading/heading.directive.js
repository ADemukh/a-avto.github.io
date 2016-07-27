(function HeadingDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qheading', HeadingDirective);

    function HeadingDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/heading/heading.tmpl.html',
                scope: {}
        };
    }
})();