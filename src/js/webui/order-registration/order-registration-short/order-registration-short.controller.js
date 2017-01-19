(function OrderRegistrationShortControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.orderregistrationshort', OrderRegistrationShortController);

	OrderRegistrationShortController.$inject = ['newBid', 'cars', '$scope', '$state'];

	function OrderRegistrationShortController(newBid, cars, $scope, $state) {
		var vm;

		vm = this;
		vm.titleAlt = 'Все автосервисы под рукой';
		vm.setCarDetailsAlt = 'Укажите информацию по автомобилю';
		vm.carMarkAlt = 'Марка';
		vm.carModelAlt = 'Модель';
		vm.carYearAlt = 'Год';
		vm.whatShouldBeRepairedAlt = 'Что именно нужно починить?';
		vm.toAllShopsAlt = 'Заявка во все сервисы';
		vm.toAllShopsDescriptionAlt = 'Ваша заявка будет отправлена во все сервисы, и вы сможете выбрать лучший';
		vm.searchByMapAlt = 'Искать на карте';
		vm.searchByMapDesciptionAlt = 'Вы можете сразу выбрать работы из прайс-листов, и записаться на ремонт';

		vm.canChooseCar = function canChooseCar() {
			return vm.cars && vm.cars.length;
		};
		vm.canChooseCarModel = function canChooseCarModel() {
			return !!vm.car;
		};
		vm.canChooseCarModelYear = function canChooseCarModelYear() {
			return !!vm.model;
		};
		vm.sendToAll = function sendToAll() {
			newBid.car = vm.car;
			newBid.model = vm.model;
			newBid.year = vm.year;
			newBid.details = vm.details;
			$state.go('order-registration');
		};
		vm.searchByMap = function searchByMap() {
			newBid.car = vm.car;
			newBid.model = vm.model;
			newBid.year = vm.year;
			newBid.details = vm.details;
			$state.go('maps');
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