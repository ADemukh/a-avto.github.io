(function ClientCarReadComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCarRead', {
            controller: 'controllers.clientcarread',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/client-car-read/client-car-read.tmpl.html',
            bindings: {
                car: '<',
                onDelete: '&',
                onEdit: '&'
            }
        });
})();