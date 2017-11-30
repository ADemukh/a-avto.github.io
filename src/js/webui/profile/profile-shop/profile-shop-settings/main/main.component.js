(function ProfileShopSettingsMainComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileShopSettingsMain', {
            controller: 'controllers.profileshopsettingsmain',
            templateUrl: 'webui/profile/profile-shop/profile-shop-settings/main/main.tmpl.html'
        })
        .controller('controllers.profileshopsettingsmain', ProfileShopSettingsMainController);

    ProfileShopSettingsMainController.$inject = ['services.common', 'services.webui.alerts', 'services.identity', '$state', '$scope', '$uibModal'];

    function ProfileShopSettingsMainController(common, alerts, identityService, $state, $scope, $uibModal) {
        var vm;

        vm = this;
        vm.$onInit = function onChanges() {
            vm.user = identityService.user;
            changeCoordinatesText();

            this.resetServerError = function onChange() {
                // vm.alerts = null;
            };

            this.selectCoordinatesOnMap = function selectCoordinatesOnMap() {
                var modalInstance;

                modalInstance = $uibModal.open({
                    animation: false,
                    component: 'qSelectCoordinatesOnMap',
                    resolve: {
                        options: function options() {
                            return {
                                longitude: vm.user.longitude,
                                latitude: vm.user.latitude
                            };
                        }
                    }
                });

                modalInstance.result.then(
                    function selected(selectedAddress) {
                        vm.user.longitude = selectedAddress.longitude;
                        vm.user.latitude = selectedAddress.latitude;
                        changeCoordinatesText();
                    },
                    function closed() {});
            };

            this.changeContactInfo = function changeContactInfo(isValid) {
                if (isValid) {
                    common.services.shop.changeContactInfo(vm.user)
                        .then(function complete(response) {
                            vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                        });
                }
            };

            function changeCoordinatesText() {
                vm.user.coordinates = vm.user && vm.user.longitude && vm.user.latitude ?
                    vm.user.longitude + '\n' + vm.user.latitude :
                    null;
            }
        };
    }
})();