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
        })
        .controller('controllers.clientcarread', function ClientCarReadController() {
            this.$onInit = function onInit() {
                this.delete = function deleteCar() {
                    this.onDelete({
                        $event: {
                            car: this.car
                        }
                    });
                };
                this.edit = function editCar() {
                    this.onEdit();
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.car) {
                    this.car = angular.copy(this.car);
                }
            };
        });
})();