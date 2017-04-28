(function ClientCarEditComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCarEdit', {
            controller: 'controllers.clientcaredit',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/client-car-edit/client-car-edit.tmpl.html',
            bindings: {
                car: '<',
                onSave: '&',
                onCancel: '&'
            }
        });
})();