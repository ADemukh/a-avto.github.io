(function ClientCarComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCar', {
            controller: 'controllers.clientcar',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/client-car/client-car.tmpl.html',
            bindings: {
                car: '<',
                onUpdate: '&',
                onDelete: '&'
            }
        })
        .controller('controllers.clientcar', function ClientCarController() {
            this.$onInit = function onInit() {
                this.toEditMode = function toEditMode() {
                    this.editMode = true;
                };
                this.cancelEditMode = function cancelEditMode() {
                    this.editMode = false;
                };
                this.update = function updateCar(event) {
                    if (event.car) {
                        this.editMode = false;
                        this.car = event.car;
                        this.onUpdate({
                            $event: {
                                newCar: event.car,
                                oldCar: this.originalCar
                            }
                        });
                        this.cancelEditMode();
                    }
                };
                this.delete = function deleteCar(event) {
                    if (event.car) {
                        this.car = event.car;
                        this.onDelete({
                            $event: {
                                car: this.originalCar
                            }
                        });
                    }
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.car) {
                    this.originalCar = this.car;
                    this.car = angular.copy(this.car);
                    this.editMode = false;
                }
            };
        });
})();