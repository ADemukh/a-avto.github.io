(function ProfileClientOrdersItemComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qClientOrderItem', {
            controller: 'controllers.clientordersitem',
            templateUrl: 'webui/common/orders/order.tmpl.html',
            bindings: {
                order: '<',
				onChange: '&',
				onRemove: '&'
            }
        })
        .controller('controllers.clientordersitem', ClientOrdersItemController);

    ClientOrdersItemController.$inject = [];

    function ClientOrdersItemController() {
        this.$onInit = function onInit() {
			this.closeOrder = function closeOrder() {
				this.onClose({
					$event: this.order
				});
			};
			this.deleteOrder = function deleteOrder() {
				this.onDelete({
					$event: this.order
				});
			};
			this.seeMessages = function seeMessages() {
			};
        };
        this.$onChanges = function onChanges(changes) {
            if (changes.order) {
                this.order = angular.copy(this.order);
            }
        };
    }
})();