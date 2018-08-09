(function DialogsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogs', {
            controller: 'controllers.dialogs',
            templateUrl: 'webui/profile/common/dialogs/dialogs.tmpl.html',
            bindings: {
                user: '<',
                dialogs: '<',
                selectedDialog: '<',
                selectDialog: '&'
            }
        })
        .controller('controllers.dialogs', DialogsController);

        DialogsController.$inject = ['_'];

    function DialogsController(_) {
        var vm;

        vm = this;

        vm.countUnseenMessages = function countUnseenMessages(dialog) {
            return _.filter(dialog.messages, function seenByUser(message) {
                return !message.seen && message.author._id !== vm.user._id;
            }).length;
        };
    }
})();
