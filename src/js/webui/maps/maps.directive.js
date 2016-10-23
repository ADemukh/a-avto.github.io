(function MapsDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qMaps', MapsDirective);

    function MapsDirective() {
        return {
                restrict: 'E',
                controller: 'maps',
                controllerAs: 'vm',
                templateUrl: 'webui/maps/maps.tmpl.html',
                scope: {}
        };
    }
})();