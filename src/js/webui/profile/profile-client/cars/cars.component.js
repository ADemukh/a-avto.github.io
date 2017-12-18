(function ProfileClientCarsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientCars', {
            controller: 'controllers.profileclientcars',
            templateUrl: 'webui/profile/profile-client/cars/cars.tmpl.html'
        })
        .controller('controllers.profileclientcars', ProfileClientCarsController);

    ProfileClientCarsController.$inject = [ '_', 'services.client', 'services.webui.alerts', 'services.identity', '$translate'];

    function ProfileClientCarsController(_, clientService, alerts, identity, $translate) {
        var vm;

        vm = this;

        this.$onInit = function onInit() {
            this.cars = angular.copy(identity.user.cars);
            this.newCar = {};
            vm.alerts = [];

            this.delete = function deleteCar(event) {
                if (event && event._id) {
                    this.cars.splice(_.findIndex(this.cars, { _id: event._id }), 1);
                    changeCars(this.cars);
                }
            };
            this.update = function updateCar(event) {
                if (event && event._id && event.car) {
                    this.cars.splice(_.findIndex(this.cars, { _id: event._id }), 1, event.car);
                    changeCars(this.cars);
                }
            };
            this.add = function addCar(event) {
                if (event && event.car) {
                    this.cars.push(event.car);
                    changeCars(this.cars)
                        .then(carAdd);
                }

                function carAdd() {
                    vm.newCar = {};
                }
            };
            this.toAddMode = function toAddMode() {
                this.addMode = true;
            };
            this.cancelAddMode = function cancelAddMode() {
                this.addMode = false;
            };

            function changeCars(cars) {
                return clientService.changeCars(cars)
                    .then(changeComplete)
                    .catch(changeFailure)
                    .finally(changeFinally);

                function changeComplete() {
                    vm.alerts.push(alerts.success($translate.instant('PROFILE_CARS_CHANGED')));
                }

                function changeFailure() {
                    vm.alerts.push(alerts.success($translate.instant('OPERATION_FAILED')));
                }

                function changeFinally() {
                    vm.cars = angular.copy(identity.user.cars);
                }
            }
        };
    }
})();