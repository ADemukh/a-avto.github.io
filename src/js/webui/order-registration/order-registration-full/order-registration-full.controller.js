(function OrderRegistrationFullControllerInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationfull',  OrderRegistrationFullController);

	OrderRegistrationFullController.$inject = ['services.common', 'services.neworder', '$scope', '$state'];

	function  OrderRegistrationFullController(common, newOrderService, $scope, $state) {
		var vm;

		vm = this;
		vm.titleAlt = 'Заявка на оценку стоимости ремонта';
		vm.stage1Alt = '1. Автомобиль';
		vm.stage2Alt = '2. Что нужно сделать?';
		vm.stage3Alt = '3. Информация';
		vm.setCarDetailsAlt = 'Укажите информацию по автомобилю';
		vm.carMarkAlt = 'Марка';
		vm.carModelAlt = 'Модель';
		vm.carYearAlt = 'Год';
		vm.vinAlt = 'VIN';
		vm.whatShouldBeRepairedAlt = 'Опишите работы которые необходимо сделать';
		vm.toAllShopsAlt = 'Заявка во все сервисы';
		vm.toAllShopsDescriptionAlt = 'Ваша заявка будет отправлена во все сервисы, и вы сможете выбрать лучший';
		vm.searchByMapAlt = 'Искать на карте';
		vm.searchByMapDesciptionAlt = 'Вы можете сразу выбрать работы из прайс-листов, и записаться на ремонт';

		vm.newOrder = newOrderService.newOrder;
		common.services.car.getCars().then(function onGetCars(carMarks) {
			vm.carMarks = carMarks;
		});

		vm.canChooseCarMark = function canChooseCarMark() {
			return vm.carMarks && vm.carMarks.length;
		};
		vm.canChooseCarModel = function canChooseCarModel() {
			return vm.carModels && newOrderService.carMarkIsSet();
		};
		vm.canChooseCarModelYear = function canChooseCarModelYear() {
			return vm.carModelYears && newOrderService.carModelIsSet();
		};

		$scope.$watch('$ctrl.newOrder.car.mark', function watchCarMark() {
			vm.carModels = [];
			vm.carModelYears = [];
			// vm.newOrder.car.model = null;
			// vm.newOrder.car.year = null;
			if (newOrderService.carMarkIsSet()) {
				common.services.car.getCarModels(vm.newOrder.car.mark).then(function onRecieveCarModels(carModels) {
					vm.carModels = carModels;
				});
			}
		});

		$scope.$watch('$ctrl.newOrder.car.model', function watchCarModel() {
			vm.carModelYears = [];
			// vm.newOrder.car.year = null;
			if (newOrderService.carMarkIsSet() && newOrderService.carModelIsSet()) {
				common.services.car.getCarModelYears(vm.newOrder.car.mark, vm.newOrder.car.model).then(function onRecieveCarModelYears(carModelYears) {
					vm.carModelYears = carModelYears;
				});
			}
		});
	}
})();