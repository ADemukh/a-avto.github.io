(function DialogsContainerComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogsContainer', {
            controller: 'controllers.dialogscontainer',
            templateUrl: 'webui/profile/common/dialogs-container/dialogs-container.tmpl.html'
        })
        .controller('controllers.dialogscontainer', DialogsContainerController);

        DialogsContainerController.$inject = [
            '_',
            'services.identity',
            '$stateParams',
            'services.client',
            'services.shop',
            'services.dialog'
        ];

    function DialogsContainerController(_, identityService, $stateParams, clientService, shopService, dialogService) {
        var vm;

        vm = this;
        vm.$onInit = function onInit() {
            var getDialogsPromise;

            vm.loading = true;
            vm.user = identityService.user;
            if (vm.user.role === 'client') {
                getDialogsPromise = clientService.getOrderDialogs($stateParams.orderId);
            } else if (vm.user.role === 'shop') {
                getDialogsPromise = shopService.getShopDialogs();
            }

            getDialogsPromise.then(function gotDialogs(dialogs) {
                vm.dialogs = dialogs;
                if (vm.dialogs.length) {
                    // vm.selectedDialog = vm.dialogs[0];
                }
                vm.loading = false;
            });
        };

        vm.updateSelectedDialog = function updateSelectedDialog() {
            var getOrderDialogPromise;

            if (vm.user.role === 'client') {
                getOrderDialogPromise = clientService.getOrderDialogById(vm.selectedDialog._id);
            } else if (vm.user.role === 'shop') {
                getOrderDialogPromise = shopService.getOrderDialogById(vm.selectedDialog._id);
            }
            getOrderDialogPromise.then(function gotUpdatedDialog(dialog) {
                    var selectedDialogIndex;

                    selectedDialogIndex = _.indexOf(vm.dialogs, vm.selectedDialog);
                    vm.dialogs[selectedDialogIndex] = dialog;
                    vm.selectedDialog = dialog;
                });
        };

        vm.selectDialog = function selectDialog(dialog) {
            vm.selectedDialog = dialog;

            setDialogMessagesSeen(dialog.messages);
        };

        function setDialogMessagesSeen(messages) {
            var unseenMessages, unseenMessagesIds;

            unseenMessages = _.filter(messages, msg => isMessageUnseen(msg));
            unseenMessagesIds = _.map(unseenMessages, msg => msg._id);

            // set seen already fetched object (avoid additional fetching)
            dialogService.setMessagesSeen(unseenMessagesIds)
                .then(() => _.each(unseenMessages, msg => {
                    msg.seen = true;
                }));
        }

        function isMessageUnseen(msg) {
            return !msg.seen && msg.author._id !== vm.user._id;
        }
    }
})();
