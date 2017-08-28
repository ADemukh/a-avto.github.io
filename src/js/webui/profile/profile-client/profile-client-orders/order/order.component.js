(function ProfileClientOrdersItemComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientOrderItem', {
            controller: 'controllers.profileclientordersitem',
            templateUrl: 'webui/profile/profile-client/profile-client-orders/order/order.tmpl.html',
            bindings: {
                order: '<',
				onChange: '&',
				onRemove: '&'
            }
        })
        .controller('controllers.profileclientordersitem', ProfileClientOrdersItemController);

    ProfileClientOrdersItemController.$inject = [];

    function ProfileClientOrdersItemController() {
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