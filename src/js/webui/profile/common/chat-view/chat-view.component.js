(function ChatViewComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qChatView', {
            controller: 'controllers.chatview',
            templateUrl: 'webui/profile/common/chat-view/chat-view.tmpl.html',
            bindings: {
                user: '<',
                selectedDialog: '<'
            }
        })
        .controller('controllers.chatview', ChatViewController);

    ChatViewController.$inject = ['services.dialog'];

    function ChatViewController(dialogService) {
        var user, vm;

        vm = this;

        vm.sendUserMsg = function sendUserMessage() {
            dialogService.addMessageToDialog(vm.selectedDialog, vm.user, vm.userMsg);
        };
    }
})();
