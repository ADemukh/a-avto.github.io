(function ClientCarEditControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.clientcaredit', ClientCarEditController);

	ClientCarEditController.$inject = ['services.car', '$scope'];

	function ClientCarEditController(car, $scope) {
		var vm;

		vm = this;

		this.$onChanges = function onChanges(changes) {
			if (changes.car) {
				this.car = this.car ?
					angular.copy(this.car) : {};
			}
		};

		this.save = function saveCar() {
			this.onSave({
				$event: {
					car: this.car
				}
			});
		};
		this.cancel = function cancel() {
			this.onCancel();
		};

		car.getCars().then(function onGetCars(carMarks) {
			vm.carMarks = carMarks;
		});

		$scope.$watch('$ctrl.car.mark', function watchCarMark() {
			vm.carModels = [];
			vm.carModelYears = [];
			if (vm.car.mark) {
				car.getCarModels(vm.car.mark).then(function onRecieveCarModels(carModels) {
					vm.carModels = carModels;
				});
			}
		});


		$scope.$watch('$ctrl.car.model', function watchCarModel() {
			vm.carModelYears = [];
			if (vm.car.mark && vm.car.model) {
				car.getCarModelYears(vm.car.mark, vm.car.model).then(function onRecieveCarModelYears(carModelYears) {
					vm.carModelYears = carModelYears;
				});
			}
		});
	}
})();