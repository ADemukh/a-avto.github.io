(function RegistrationShopControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['newBid', 'cars', 'shops', '$scope'];

	function RegistrationShopController(newBid, cars, shops, $scope) {
		var map, map1, vm;

		vm = this;

		vm.afterMapInit = function onMapInited(mapParameter) {
			map1 = mapParameter;
		};

		$scope.afterInit = function onInited($map) {
			map = $map;
		};

		$scope.mapClick = function onMapCLick(e) {
			var coords;

			if (map.balloon.isOpen()) {
				map.balloon.close();
			} else {
				coords = e.get('coords');
				map.balloon.open(coords, {
					contentHeader: 'Событие!',
					contentBody: 'Кто-то щелкнул по карте. Координаты щелчка: ' + [coords[0].toPrecision(6), coords[1].toPrecision(6)].join(', '),
					contentFooter: 'Щелкните еще раз'

				});
				vm.dolgota = coords[0].toPrecision(6);
				vm.shirota = coords[1].toPrecision(6);
			}
		};

		$scope.handleContext = function handleContext(e) {
			map.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
		};

		$scope.balloonOpen = function balloonOpen(){
			map.hint.close();
		};

		vm.clientRegistration = 'Регистрация клиента';
		vm.registerClient = 'Зарегистрироваться';
		vm.q = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.w = 'Пользовательским соглашением';
		vm.e = ' и даёте ';
		vm.r = 'Согласие на обработку перносальных данных';
		vm.carRegistration = 'Регистрация автосервиса';
		vm.authorizedDealer = 'Официальный дилер';
		vm.registerCar = 'Зарегистрироваться';
	}
})();