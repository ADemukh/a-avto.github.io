(function HowItWorksDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qhowitworks', HowItWorksDirective);

    function HowItWorksDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/howitworks/howitworks.tmpl.html',
                scope: {}
        };
    }
})();