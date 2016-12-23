(function OrderRegistrationFullControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.orderregistrationfull',  OrderRegistrationFullController);

	OrderRegistrationFullController.$inject = ['cars', '$scope'];

	function  OrderRegistrationFullController(cars, $scope) {
		var vm;

		vm = this;
		// vm.information = 'Информация по автомобилю';
		// vm.auto = 'Марка';
		// vm.modell = 'Модель';
		// vm.year = 'Год';
		// vm.typeofmotor = 'Тип двигателя';
		// vm.svalue='Объем';
		// vm.typeKPP='Тип КПП';
		// vm.vinnomber="Vin-номер";

		cars.getCars().then(function onGetCars(carMarks) {
			vm.cars = carMarks;
		});

		$scope.$watch('vm.car', function watchCar(newValue, oldValue) {
			vm.models = [];
			vm.years = [];
			if (vm.car) {
				cars.getCarModels(vm.car).then(function onRecieveCarModels(carModels) {
					vm.models = carModels;
				});
			}
		});

		$scope.$watch('vm.model', function watchCar(newValue, oldValue) {
			vm.years = [];
			if (vm.car && vm.model) {
				cars.getCarModelYears(vm.car, vm.model).then(function onRecieveCarModelYears(carModelYears) {
					vm.years = carModelYears;
				});
			}
		});
	}
})();