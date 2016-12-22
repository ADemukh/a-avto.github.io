(function OrderRegistrationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('orderRegistration', OrderRegistrationController);

	OrderRegistrationController.$inject = ['newBid','cars', '$scope'];

	function OrderRegistrationController (newBid, cars, $scope) {
		var vm;

		vm = this;
		vm.repair = 'Ремонт автомобиля на ваших условиях';
		vm.information = 'Укажите информацию по автомобилю';
		vm.auto = 'Марка';
		vm.modell = 'Модель';
		vm.yearr = 'Год';
		vm.what = 'Что именно нужно починить?';
		vm.application = 'Заявка во все сервисы';
		vm.departure = 'Ваша заявка будет отправлена во все сервисы, и вы сможете выбрать лучший';
		vm.search = 'Искать на карте';
		vm.price = 'Вы можете сразу выбрать работы из прайс-листов, и записаться на ремонт';
		
		cars.getCars().then(function(cars){
			vm.cars = cars;
		});

		$scope.$watch('vm.car', function watchCar(newValue, oldValue) {
			vm.models = [];
			vm.years = [];
			if (vm.car) {
				cars.getCarModels(vm.car).then(function(models){
					vm.models = models;
				});
			}
		});

		$scope.$watch('vm.model', function watchCar(newValue, oldValue) {
			vm.years = [];
			if (vm.car && vm.model) {
				cars.getCarModelYears(vm.car, vm.model).then(function(years){
					vm.years = years;
				});	
			}
		});

		vm.sendToAll=function sendToAll(){
			newBid.car = vm.car;
			newBid.model=vm.model;
			newBid.year=vm.year;
			newBid.details=vm.details;
		}

		vm.searchByMap=function searchByMap(){
		}
	}
})();