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

	vm.cars = cars.getCars();

	$scope.$watch('vm.car', function watchCar(newValue, oldValue) {
		vm.models = [];
		vm.years = [];
		if (vm.car) {
			vm.models = cars.getCarModels(vm.car);	
		}
	});

	$scope.$watch('vm.model', function watchCar(newValue, oldValue) {
		vm.years = [];
		if (vm.model) {
			vm.years = cars.getCarModelYears(vm.model);	
		}
	});

}
})();