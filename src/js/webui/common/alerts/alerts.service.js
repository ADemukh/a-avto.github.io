(function AlertsServiceInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .factory('services.webui.alerts', AlertsService);

    function AlertsService() {
        var alertTypes;

        alertTypes = {
            success: 'success',
            info: 'info',
            warning: 'warning',
            danger: 'danger'
        };

        return {
            success: alert(alertTypes.success),
            info: alert(alertTypes.info),
            warning: alert(alertTypes.warning),
            danger: alert(alertTypes.danger)
        };

        function alert(alertType) {
            return function alertMessage(message) {
                return {
                    message: message,
                    type: alertType
                };
            };
        }
    }
})();