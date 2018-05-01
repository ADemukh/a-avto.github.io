(function DialogsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogs', {
            controller: 'controllers.dialogs',
            templateUrl: 'webui/profile/common/dialogs/dialogs.tmpl.html',
            bindings: {
                profileType: '<',
                dialogs: '<',
                selectedDialog: '='
            }
        })
        .controller('controllers.dialogs', DialogsController);

        // DialogsController.$inject = [];

    function DialogsController() {
        var vm;

        vm = this;
        vm.changeSelectedDialog = function changeSelectedDialog(dialog) {
            vm.selectedDialog = dialog;
        };
    }
})();
