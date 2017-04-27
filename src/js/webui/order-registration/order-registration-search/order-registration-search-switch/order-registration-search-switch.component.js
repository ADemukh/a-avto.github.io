(function OrderRegistrationSearchSwitchComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchSwitch', {
            controller: 'controllers.orderregistrationsearchswitch',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-switch/order-registration-search-switch.tmpl.html',
            bindings: {
                options: '<',
                active: '<',
                onSwitch: '&'
            }
        });
})();