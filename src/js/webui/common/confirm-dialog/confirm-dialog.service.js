(function ConfirmDialogServiceInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .factory('services.webui.confirmdialogs', ConfirmDialogsService);

    ConfirmDialogsService.$inject = ['$uibModal'];

    function ConfirmDialogsService($uibModal) {
        return {
            confirmAndContinue: confirmAndContinue
        };

        function confirmAndContinue() {
            var modalInstance;

            modalInstance = $uibModal.open({
                animation: false,
                component: 'qConfirmDialog',
                resolve: {
                    captions: function captions() {
                        return {
                            message: 'CHANGE_CONFIRMATION',
                            confirm: 'CONFIRM',
                            reject: 'REJECT'
                        };
                    }
                }
            });
            return modalInstance.result;
        }
    }
})();