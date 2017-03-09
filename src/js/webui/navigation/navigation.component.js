(function NavigationComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qNavigation', {
            controller: 'controllers.navigation',
            templateUrl: 'webui/navigation/navigation.tmpl.html'
        });
})();