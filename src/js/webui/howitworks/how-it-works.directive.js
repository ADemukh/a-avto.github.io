(function HowItWorksDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qHowItWorks', HowItWorksDirective);

    function HowItWorksDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/howitworks/how-it-works.tmpl.html',
                scope: {}
        };
    }
})();