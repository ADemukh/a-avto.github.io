(function ProfileClientOrdersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileClientOrders', {
            controller: 'controllers.profileclientorders',
            templateUrl: 'webui/profile/profile-client/profile-client-orders/profile-client-orders.tmpl.html'
        })
        .controller('controllers.profileclientorders', ProfileClientOrdersController);

    ProfileClientOrdersController.$inject = ['services.client'];

    function ProfileClientOrdersController(clientService) {
        this.$onInit = function onInit() {
            this.updateOrder = function updateOrder(event) {
                if (event.order) {
                    event.order.loading = true;
                    clientService.closeOrder()
                        .then(function succeded() {
                            event.order.status = 'closed';
                        }.bind(this))
                        .catch(function failed() {}.bind(this))
                        .finally(function finished() {
                            event.order.loading = false;
                        }.bind(this));
                }
            }.bind(this);
            this.removeOrder = function removeOrder(event) {
                if (event.order) {
                    event.order.loading = true;
                    clientService.deleteOrder()
                        .then(function succeded() {
                            var orderIndex;

                            orderIndex = this.orders.indexOf(event.order);
                            if (orderIndex > -1) {
                                this.orders.splice(orderIndex, 1);
                            }
                            event.order.status = 'deleted';
                        }.bind(this))
                        .catch(function failed() {}.bind(this))
                        .finally(function finished() {
                            event.order.loading = false;
                        }.bind(this));
                }
            }.bind(this);
            this.changeFilter = function changeFilter(event) {
                if (event.filter && event.filter !== this.filter) {
                    this.filter = event.filter;
                    this.getOrders();
                }
            }.bind(this);
            this.getOrders = function getOrders() {
                var filters;

                filters = {
                    filter: this.filter
                };
                this.loading = true;
                clientService.getOrders(filters)
                    .then(function gotOrders(orders) {
                        this.orders = orders;
                        this.loading = false;
                    }.bind(this));
            }.bind(this);

            this.filters = ['Новые', 'Отвеченные', 'Архив', 'Все'];
            this.filter = this.filters[0];
            this.getOrders();
        };
    }
})();