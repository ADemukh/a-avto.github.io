(function ClientCarNewComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCarNew', {
            controller: 'controllers.clientcarnew',
            templateUrl: 'webui/profile/profile-client/cars/new/new.tmpl.html',
            bindings: {
                car: '<',
                onSave: '&'
            }
        })
        .controller('controllers.clientcarnew', function ClientCarNewController() {
            this.$onInit = function onInit() {
                this.onCarChange = function onCarChange(event) {
                    if (event.car) {
                        this.car = event.car;
                    }
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.car) {
                    this.car = angular.copy(this.car);
                }
            };
        });
})();