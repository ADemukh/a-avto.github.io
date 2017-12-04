(function ProfileClientSettingsMainComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientSettingsMain', {
            controller: 'controllers.profileclientsettingsmain',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/main/main.tmpl.html'
        })
        .controller('controllers.profileclientsettingsmain', ProfileClientSettingsMainController);

    ProfileClientSettingsMainController.$inject = ['services.common', 'services.client', 'services.webui.alerts', 'services.identity', '$translate'];

    function ProfileClientSettingsMainController(common, clientService, alerts, identityService, $translate) {
        var vm;

        vm = this;

        this.$onInit = function onChanges() {
            this.user = {
                name: identityService.user.name,
                email: identityService.user.email,
                phone: identityService.user.phone,
                address: identityService.user.address,
                city: identityService.user.city
            };
            this.changeContactInfo = function changeContactInfo(isValid) {
                if (isValid) {
                    clientService.changeContactInfo(vm.user)
                        .then(function complete() {
                            vm.alerts = [alerts.success($translate.instant('PROFILE_CONTACTS_CHANGED'))];
                        }, function failure() {
                            vm.alerts = [alerts.success($translate.instant('OPERATION_FAILED'))]
                        });
                }
            };
            common.services.adress.getCities().then(function onGetCities(cities) {
                vm.allCities = cities;
            });
        };
    }
})();