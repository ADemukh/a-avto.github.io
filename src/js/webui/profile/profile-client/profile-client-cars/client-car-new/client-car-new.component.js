(function ClientCarNewComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCarNew', {
            controller: 'controllers.clientcarnew',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/client-car-new/client-car-new.tmpl.html',
            bindings: {
                onAdd: '&'
            }
        })
        .controller('controllers.clientcarnew', function ClientCarNewController() {
            this.$onInit = function onInit() {
                this.add = function addCar() {
                    this.onAdd();
                };
            };
        });
})();