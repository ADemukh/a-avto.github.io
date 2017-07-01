(function OrderRegistrationFullComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationFull', {
            controller: 'controllers.orderregistrationfull',
            templateUrl: 'webui/order-registration/order-registration-full/order-registration-full.tmpl.html'
        })
        .controller('controllers.orderregistrationfull', OrderRegistrationFullController);

    OrderRegistrationFullController.$inject = ['services.common', 'services.neworder'];

    function OrderRegistrationFullController(common, newOrderService) {
        this.$onInit = function onInit() {
            this.newOrder = angular.copy(newOrderService.newOrder);
            this.onCarSelect = function onCarSelect($event) {
                if ($event && $event.car) {
                    $event.car.VIN = this.newOrder.car.VIN;
                    this.newOrder.car = angular.copy($event.car);
                }
            };

            this.titleAlt = 'Заявка на оценку стоимости ремонта';
            this.stage1Alt = '1. Автомобиль';
            this.stage2Alt = '2. Что нужно сделать?';
            this.stage3Alt = '3. Информация';
            this.setCarDetailsAlt = 'Укажите информацию по автомобилю';
            this.carMarkAlt = 'Марка';
            this.carModelAlt = 'Модель';
            this.carYearAlt = 'Год';
            this.vinAlt = 'VIN';
            this.whatShouldBeRepairedAlt = 'Опишите работы которые необходимо сделать';
            this.toAllShopsAlt = 'Заявка во все сервисы';
            this.toAllShopsDescriptionAlt = 'Ваша заявка будет отправлена во все сервисы, и вы сможете выбрать лучший';
            this.searchByMapAlt = 'Искать на карте';
            this.searchByMapDesciptionAlt = 'Вы можете сразу выбрать работы из прайс-листов, и записаться на ремонт';
        };
    }
})();