(function ProfileClientOrdersComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qProfileClientOrders', {
            controller: 'controllers.profileclientorders',
            templateUrl: 'webui/profile/profile-client/profile-client-orders/profile-client-orders.tmpl.html'
        });
})();