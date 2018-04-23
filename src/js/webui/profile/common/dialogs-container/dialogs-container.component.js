(function DialogsContainerComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDialogsContainer', {
            controller: 'controllers.dialogscontainer',
            templateUrl: 'webui/profile/common/dialogs-container/dialogs-container.tmpl.html'
        })
        .controller('controllers.dialogscontainer', DialogsContainerController);

        DialogsContainerController.$inject = ['$stateParams', 'services.order'];

    function DialogsContainerController($stateParams, orderService) {
        var vm;

        vm = this;
        this.$onInit = function onInit() {
            vm.loading = true;

            orderService.getOrderById($stateParams.orderId)
                .then(function gotOrder(order) {
                    vm.order = order;
                    vm.loading = false;
                });
        };
    }
})();