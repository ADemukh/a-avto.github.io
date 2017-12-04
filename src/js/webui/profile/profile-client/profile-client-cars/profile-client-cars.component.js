(function ProfileClientCarsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientCars', {
            controller: 'controllers.profileclientcars',
            templateUrl: 'webui/profile/profile-client/profile-client-cars/profile-client-cars.tmpl.html'
        })
        .controller('controllers.profileclientcars', ProfileClientCarsController);

    ProfileClientCarsController.$inject = ['services.client', 'services.webui.alerts', 'services.identity', 'services.webui.confirmdialogs', '$translate'];

    function ProfileClientCarsController(clientService, alerts, identity, confirm, $translate) {
        this.$onInit = function onInit() {
            var vm;

            vm = this;
            this.cars = identity.user.cars;
            this.addMode = false;

            this.delete = function deleteCar(event) {
                var index;

                if (event.car) {
                    return confirm.confirmAndContinue()
                        .then(function confirmed() {
                            index = vm.cars.indexOf(event.car);
                            vm.cars.splice(index, 1);
                            changeCars(vm.cars);
                        });
                }
            };
            this.update = function updateCar(event) {
                var index;

                if (event.newCar && event.oldCar) {
                    index = this.cars.indexOf(event.oldCar);
                    this.cars.splice(index, 1, event.newCar);
                    changeCars(this.cars);
                }
            };
            this.add = function addCar(event) {
                if (event.car) {
                    this.cars.push(event.car);
                    this.addMode = false;
                    changeCars(this.cars);
                }
            };
            this.toAddMode = function toAddMode() {
                this.addMode = true;
            };
            this.cancelAddMode = function cancelAddMode() {
                this.addMode = false;
            };

            function changeCars(cars) {
                clientService.changeCars(cars)
                    .then(function complete() {
                        vm.alerts = [alerts.success($translate.instant('PROFILE_CARS_CHANGED'))];
                        vm.user = {};
                    }, function failure() {
                        vm.alerts = [alerts.success($translate.instant('OPERATION_FAILED'))]
                    });
            }
        };
    }
})();