(function DialogsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogs', {
            controller: 'controllers.dialogs',
            templateUrl: 'webui/profile/common/dialogs/dialogs.tmpl.html',
            bindings: {
                profileType: '<',
                dialogs: '<',
                changeSelectedDialog: '&'
            }
        })
        .controller('controllers.dialogs', DialogsController);

        // DialogsController.$inject = [];

    function DialogsController() {
        var vm;

        vm = this;
    }
})();
