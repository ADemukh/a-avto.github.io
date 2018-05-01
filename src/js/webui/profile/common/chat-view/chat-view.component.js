(function ChatViewComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qChatView', {
            controller: 'controllers.chatview',
            templateUrl: 'webui/profile/common/chat-view/chat-view.tmpl.html',
            bindings: {
                profileType: '<',
                selectedDialog: '<'
            }
        })
        .controller('controllers.chatview', ChatViewController);

        // DialogsController.$inject = [];

    function ChatViewController() {
        var vm;

        vm = this;
    }
})();
