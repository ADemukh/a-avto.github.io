(function NavigationComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qAlerts', {
            controller: 'controllers.alerts',
            templateUrl: 'webui/common/alerts/alerts.tmpl.html',
            bindings: {
                alerts: '<',
                dismissOnTimeout: '<'
            }
        });
})();