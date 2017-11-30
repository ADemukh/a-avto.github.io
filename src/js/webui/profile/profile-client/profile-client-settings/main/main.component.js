(function ProfileClientSettingsMainComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientSettingsMain', {
            controller: 'controllers.profileclientsettingsmain',
            templateUrl: 'webui/profile/profile-client/profile-client-settings/main/main.tmpl.html'
        })
        .controller('controllers.profileclientsettingsmain', ProfileClientSettingsMainController);

    ProfileClientSettingsMainController.$inject = ['services.common', 'services.client', 'services.webui.alerts', 'services.identity'];

    function ProfileClientSettingsMainController(common, clientService, alerts, identityService) {
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
                        .then(function complete(response) {
                            vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                        });
                }
            };
            common.services.adress.getCities().then(function onGetCities(cities) {
                vm.allCities = cities;
            });
        };
    }
})();