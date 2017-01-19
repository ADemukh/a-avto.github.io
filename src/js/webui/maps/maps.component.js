(function MapsDirectiveInit() {
    'use strict';

    angular.module('webui')
        .component('qMaps', {
            controller: 'controllers.maps',
            templateUrl: 'webui/maps/maps.tmpl.html'
        });
})();