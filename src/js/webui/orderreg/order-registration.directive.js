(function OrderRegistrationDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qOrderreg', OrderRegistrationDirective);

    function OrderRegistrationDirective() {
        return {
                restrict: 'E',
                controller: 'orderRegistration',
                controllerAs: 'vm',
                templateUrl: 'webui/orderreg/order-registration.tmpl.html',
                scope: {}
        };
    }
})();


