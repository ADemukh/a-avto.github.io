(function ClientCarComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientCarMy', {
            controller: 'controllers.clientcarmy',
            templateUrl: 'webui/profile/profile-client/cars/my/my.tmpl.html',
            bindings: {
                car: '<',
                onUpdate: '&',
                onDelete: '&'
            }
        })
        .controller('controllers.clientcarmy', ClientCarMyController);

    ClientCarMyController.$inject = ['services.webui.confirmdialogs'];

    function ClientCarMyController(confirm) {
        var pristineCar;

        this.$onInit = function onInit() {
            this.toEditMode = function toEditMode() {
                this.editMode = true;
            };
            this.cancelEditMode = function cancelEditMode() {
                this.car = angular.copy(pristineCar);
                this.editMode = false;
            };
            this.update = function updateCar() {
                this.editMode = false;
                this.onUpdate({
                    $event: {
                        car: this.car,
                        _id: pristineCar._id
                    }
                });
            };
            this.delete = function deleteCar() {
                return confirm.confirmAndContinue()
                    .then(function confirmed() {
                        this.onDelete({
                            $event: {
                                _id: this.car._id
                            }
                        });
                    }.bind(this));
            };
            this.onCarChange = function onCarChange(event) {
                if (event.car) {
                    this.car = event.car;
                }
            };
        };
        this.$onChanges = function onChanges(changes) {
            if (changes.car) {
                pristineCar = angular.copy(this.car);
                this.car = angular.copy(this.car);
                this.editMode = false;
            }
        };
    }
})();