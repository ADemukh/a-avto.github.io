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
        })
        .controller('controllers.alerts', AlertsController);

    function AlertsController() {
        this.$onChanges = function onChanges(changes) {
            if (changes.alerts) {
                this.alerts = angular.copy(this.alerts);
            }
            if (changes.dismissOnTimeout) {
                this.timeout = this.dismissOnTimeout > 0 ? angular.copy(this.dismissOnTimeout) : 'none';
            }
        };
        this.$onInit = function init() {
            this.closeAlert = function closeAlert(index) {
                this.alerts.splice(index, 1);
            };
        };
    }
})();