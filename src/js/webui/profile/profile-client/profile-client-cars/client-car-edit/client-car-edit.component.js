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
        })
        .controller('controllers.clientcaredit', function ClientCarEditController() {
            this.$onInit = function onInit() {
                this.save = function saveCar(isValid) {
                    if (isValid) {
                        this.onSave({
                            $event: {
                                car: this.car
                            }
                        });
                    }
                };
                this.onCarChange = function onCarChange($event) {
                    if ($event.car) {
                        $event.car.VIN = this.car.VIN;
                        this.car = angular.copy($event.car);
                    }
                };
                this.cancel = function cancel() {
                    this.onCancel();
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.car) {
                    this.car = this.car ?
                        angular.copy(this.car) : {};
                }
            };
        });
})();