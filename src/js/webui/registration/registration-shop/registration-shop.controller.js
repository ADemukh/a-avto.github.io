(function RegistrationShopControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['services.identity', '$state'];

	function RegistrationShopController(identity, $state) {
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
		vm.passwordAlt = 'Пароль';
		vm.password2Alt = 'Повторите пароль';
		vm.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.policyLinkTextPart2 = 'Пользовательским соглашением';
		vm.policyTextPart3 = ' и даете ';
		vm.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';
		vm.policyTextPart5 = '.';
		vm.shop = {
			longitude: '',
			latitude: '' };

		vm.register = function register() {
			identity.signUpShop(vm.shop)
				.then(function complete(result) {
					if (result.alert) {
						vm.errorMessage = result.alert.message;
						alert(result.alert.message);
					} else {
						alert('Ваш магазин успешно зарегистрирован!');
						$state.go('main');
					}
				});
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
				vm.shop.longitude = coords[0].toPrecision(12);
				vm.shop.latitude = coords[1].toPrecision(12);
			}
		};
	}
})();