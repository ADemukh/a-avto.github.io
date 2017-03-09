(function ProfileClientOrdersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientOrders', {
            controller: 'controllers.profileclientorders',
            templateUrl: 'webui/profile/profile-client/profile-client-orders/profile-client-orders.tmpl.html'
        });
})();