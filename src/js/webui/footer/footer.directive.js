(function FooterDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qfooter', FooterDirective);

    function FooterDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/footer/footer.tmpl.html',
                scope: {}
        };
    }
})();