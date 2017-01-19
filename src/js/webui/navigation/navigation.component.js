(function NavigationComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qNavigation', {
            controller: 'controllers.navigation',
            templateUrl: 'webui/navigation/navigation.tmpl.html'
        });
})();