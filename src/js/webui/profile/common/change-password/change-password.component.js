(function ProfileSettingsChangePasswordComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileSettingsChangePassword', {
            controller: 'controllers.profilesettingschangepassword',
            bindings: {
                changeUserPassword: '<'
            },
            templateUrl: 'webui/profile/common/change-password/change-password.tmpl.html'
        })
        .controller('controllers.profilesettingschangepassword', ProfileSettingsChangePasswordController);

    ProfileSettingsChangePasswordController.$inject = ['services.webui.alerts'];

    function ProfileSettingsChangePasswordController(alerts) {
        var vm;

        vm = this;

        vm.changePassword = function changePassword(passwordForm) {
            if (passwordForm.$valid) {
                this.changeUserPassword(vm.user.password)
                    .then(function complete(response) {
                        vm.alerts = response.data.success ?
                            [alerts.success(response.data.message ? response.data.message : 'Пароль успешно изменен.')] :
                            [alerts.danger(response.data.error ? response.data.error : 'При изменении пароля возникла ошибка.')];
                        vm.user = {};
                        passwordForm.$setPristine();
                    });
            }
        };
    }
})();