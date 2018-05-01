(function DialogsContainerComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogsContainer', {
            controller: 'controllers.dialogscontainer',
            templateUrl: 'webui/profile/common/dialogs-container/dialogs-container.tmpl.html'
        })
        .controller('controllers.dialogscontainer', DialogsContainerController);

        DialogsContainerController.$inject = ['$stateParams', 'services.client', 'services.shop'];

    function DialogsContainerController($stateParams, clientService, shopService) {
        var vm;

        vm = this;
        this.$onInit = function onInit() {
            var getDialogsPromise;

            vm.loading = true;
            vm.profileType = $stateParams.profileType;
            if (vm.profileType === 'client') {
                getDialogsPromise = clientService.getOrderDialogs($stateParams.orderId);
            } else if (vm.profileType === 'shop') {
                getDialogsPromise = shopService.getShopDialogs();
            }

            getDialogsPromise.then(function gotDialogs(dialogs) {
                vm.dialogs = dialogs;
                if (vm.dialogs.length) {
                    vm.selectedDialog = vm.dialogs[0];
                }
                vm.loading = false;
            });
        };
    }
})();
