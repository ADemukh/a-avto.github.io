(function ProfileSettingsLoadPhotoComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileSettingsLoadPhoto', {
            controller: 'controllers.profilesettingsloadphoto',
            bindings: {
                changeUserPhoto: '<'
            },
            templateUrl: 'webui/profile/common/load-photo/load-photo.tmpl.html'
        })
        .controller('controllers.profilesettingsloadphoto', ProfileSettingsLoadPhotoController);

    ProfileSettingsLoadPhotoController.$inject = [
        'services.file',
        'services.client',
        'services.webui.alerts',
        'services.identity',
        '$q',
        '$translate'
    ];

    function ProfileSettingsLoadPhotoController(fileService, clientService, alerts, identityService, $q, $translate) {
        var vm;

        vm = this;
        vm.$onInit = function onInit() {
            vm.photo = identityService.user.photo || {
                thumbUrl: 'img/user-logo.png'
            };
            vm.changePhoto = function changePhoto() {
                if (vm.uploadForm.file.$valid && vm.file) {
                    vm.loading = true;
                    fileService.uploadImage(vm.file)
                        .then(function onUpload(response) {
                            if (response && response.data && response.data.success) {
                                return vm.changeUserPhoto(response.data.details);
                            }
                            return $q.reject();
                        })
                        .then(function complete() {
                            vm.alerts = [alerts.success($translate.instant('PROFILE_PHOTO_CHANGED'))];
                            vm.photo = identityService.user.photo;
                            vm.file = null;
                        }, function failure() {
                            vm.alerts = [alerts.success($translate.instant('OPERATION_FAILED'))]
                        })
                        .finally(function complete() {
                            vm.loading = false;
                        });
                }
            };
        };
    }
})();