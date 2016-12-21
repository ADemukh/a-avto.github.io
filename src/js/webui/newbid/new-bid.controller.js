(function NewBidControllerInit() {
    'use strict';

    angular.module('webui').
	controller('newbid', NewBidController);

NewBidController.$inject = ['cars', '$scope'];

function NewBidController (cars, $scope) {
	var vm;

	vm = this;
	vm.information = 'Информация по автомобилю';
	vm.auto = 'Марка';
	vm.modell = 'Модель';
	vm.year = 'Год';
	vm.typeofmotor = 'Тип двигателя';
	vm.svalue='Объем';
	vm.typeKPP='Тип КПП';
	vm.vinnomber="Vin-номер";

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
		if (vm.model) {
			// vm.years = cars.getCarModelYears(vm.model);	
		}
	});

}
})();