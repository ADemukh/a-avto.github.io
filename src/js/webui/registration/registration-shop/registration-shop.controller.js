(function RegistrationShopControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = [];

	function RegistrationShopController() {
		var vm;

		vm = this;

		vm.title = 'Регистрация магазина';
		vm.shopNameAlt = 'Название магазина';
		vm.shopEmailAlt = 'E-mail';
		vm.shopUrlAlt = 'Сайт';
		vm.shopAddressAlt = 'г.Минск ул. Плеханова 69';
		vm.shopAddressLongitudeAlt = 'Долгота. Выбрать на карте';
		vm.shopAddressLatitudeAlt = 'Долгота. Выбрать на карте';
		vm.shopPhoneAlt = '+375 xx xxx xx xx';
		vm.shopDescriptionAlt = 'Информация о магазине';
		vm.shopIsDealerAlt = 'Официальный дилер';
		vm.findShopOnMapAlt = 'Обозначьте на карте местоположение вашего магазина';
		vm.registerActionText = 'Зарегистрироваться';

		vm.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.policyLinkTextPart2 = 'Пользовательским соглашением';
		vm.policyTextPart3 = ' и даете ';
		vm.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		vm.policyTextPart5 = '.';

		vm.register = function onRegister() {
			alert('on register!');
		};
		vm.afterInit = function onInited($map) {
			vm.map = $map;
		};
		vm.mapClick = function onMapCLick(e) {
			var coords;

			if (vm.map.balloon.isOpen()) {
				vm.map.balloon.close();
			} else {
				coords = e.get('coords');
				vm.map.balloon.open(coords, {
					contentHeader: 'Отлично!',
					contentBody: 'Щелкнув по карте, вы занесли координаты в поля регистрации.'
				});
				vm.shopAddressLongitude = coords[0].toPrecision(6);
				vm.shopAddressLatitude = coords[1].toPrecision(6);
			}
		};
		vm.handleContext = function handleContext(e) {
			// map.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
		};
		vm.balloonOpen = function balloonOpen() {
			vm.map.hint.close();
		};
	}
})();