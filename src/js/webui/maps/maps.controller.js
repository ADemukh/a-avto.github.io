(function MapsControllerInit() {
    'use strict';

    angular.module('webui').
	controller('maps', MapsController);

	MapsController.$inject = ['newBid','cars', 'shops', '$scope'];

	function MapsController (newBid, cars, shops, $scope) {
		var vm;

		vm = this;
		vm.center=[55.21, 34.30];
		vm.zoom=10;
		vm.coords=[55.21, 34.30];
		// vm.coord = shops.getCoord();
		



		// $scope.$watch('vm.car', function watchCar(newValue, oldValue) {

		// 	if (vm.car) {
		// 		vm.tel=shops.getTel(vm.car);;	
		// 	}
		// });


	}
})();



