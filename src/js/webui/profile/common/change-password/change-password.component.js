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

    ProfileSettingsChangePasswordController.$inject = ['services.webui.alerts', '$translate'];

    function ProfileSettingsChangePasswordController(alerts, $translate) {
        var vm;

        vm = this;

        vm.changePassword = function changePassword(passwordForm) {
            if (passwordForm.$valid) {
                this.changeUserPassword(vm.user.password)
                    .then(function complete() {
                        vm.alerts = [alerts.success($translate.instant('PROFILE_PASSWORD_CHANGED'))];
                        vm.user = {};
                        passwordForm.$setPristine();
                    }, function failure() {
                        vm.alerts = [alerts.success($translate.instant('OPERATION_FAILED'))]
                    });
            }
        };
    }
})();