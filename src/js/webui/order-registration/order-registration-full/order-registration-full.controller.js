(function OrderRegistrationFullControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.orderregistrationfull',  OrderRegistrationFullController);

	OrderRegistrationFullController.$inject = ['newBid', 'cars', '$scope', '$state'];

	function  OrderRegistrationFullController(newBid, cars, $scope, $state) {
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

		vm.car = newBid.car;
		vm.model = newBid.model;
		vm.year = newBid.year;
		vm.details = newBid.details;

		vm.canChooseCar = function canChooseCar() {
			return vm.cars && vm.cars.length;
		};
		vm.canChooseCarModel = function canChooseCarModel() {
			return !!vm.car;
		};
		vm.canChooseCarModelYear = function canChooseCarModelYear() {
			return !!vm.model;
		};

		$scope.$watch('$ctrl.car', function watchCar(newValue, oldValue) {
			vm.models = [];
			vm.years = [];
			if (vm.car) {
				cars.getCarModels(vm.car).then(function onRecieveCarModels(carModels) {
					vm.models = carModels;
				});
			}
		});

		$scope.$watch('$ctrl.model', function watchCar(newValue, oldValue) {
			vm.years = [];
			if (vm.car && vm.model) {
				cars.getCarModelYears(vm.car, vm.model).then(function onRecieveCarModelYears(carModelYears) {
					vm.years = carModelYears;
				});
			}
		});

		cars.getCars().then(function onGetCars(carMarks) {
			vm.cars = carMarks;
		});
	}
})();