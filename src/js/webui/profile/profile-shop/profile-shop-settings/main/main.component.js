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
            vm.user = {
                longitude: '',
                latitude: '',
                address: ''
            };

            vm.resetServerError = function onChange() {
                // vm.alerts = null;
            };

            vm.selectAddressOnMap = function selectAddressOnMap() {
                var modalInstance;

                modalInstance = $uibModal.open({
                    animation: false,
                    component: 'qSelectShopAddressOnMap',
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
                        vm.user.address = selectedAddress.address;
                    },
                    function closed() {
                    });
            };

            vm.user = {
                name: identityService.user.name,
                email: identityService.user.email,
                phone: identityService.user.phone,
                www: identityService.user.www,
                address: identityService.user.address,
                longitude: identityService.user.longitude,
                latitude: identityService.user.latitude,
                cities: identityService.user.cities,
                spareCategories: identityService.user.spareCategories,
                carMarks: identityService.user.carMarks,
            };

            this.changeContactInfo = function changeContactInfo(isValid) {
                if (isValid) {
                    common.services.shop.changeContactInfo(vm.user)
                        .then(function complete(response) {
                            vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                        });
                }
            };
        };
    }
})();