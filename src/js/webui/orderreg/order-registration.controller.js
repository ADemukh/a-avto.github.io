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
		vm.years = cars.getYears();
        vm.cars=cars.getCar();


		vm.sendToAll=function sendToAll(){
			newBid.car = vm.car;
			newBid.model=vm.model;
			newBid.year=vm.year;
			newBid.details=vm.details;
		}

		vm.searchByMap=function searchByMap(){

		}

		

		$scope.$watch('vm.car', function watchCar(newValue, oldValue) {
			vm.models = cars.getCarModels(vm.car);
			
		});

	}
})();