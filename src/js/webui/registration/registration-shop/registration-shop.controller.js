(function RegistrationShopControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['services.identity', '$state', '$scope'];

	function RegistrationShopController(identity, $state, $scope) {
		var vm;

		vm = this;

		vm.title = 'Регистрация магазина';
		vm.shopNameAlt = 'Наименование компании';
		vm.shopEmailAlt = 'E-mail';
		vm.shopUrlAlt = 'Адрес сайта';
		vm.shopAddressAlt = 'Отметить адрес магазина на карте';
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

		vm.alertContactNameIsRequired = 'Введите наименование компании';
		vm.alertWWW = 'Введите адрес сайта магазина';
		vm.alertAdress = 'Введите адрес сайта магазина';
		vm.alertEmailIsRequired = 'Введите E-mail';
		vm.alertEmailIsNotCorrect = 'Неправильный пароль';
		vm.alertPhoneIsNotCorrect = 'Номер не соответветствует шаблону +375 xx xxx xx xx';
		vm.alertPasswordIsRequired = 'Введите пароль';
		vm.alertPasswordsAreDifferent = 'Пароли не совпадают';

		vm.policyTextPart5 = '.';
		vm.shop = {
			longitude: '',
			latitude: '' ,
			address: ''};

		vm.resetServerError = function onChange() {
			vm.serverErrorMessage = null;
		};

		vm.register = function onRegister(isValid) {
			if (isValid) {
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
			}
		};

		$scope.afterInit = function afterInit(map) {
			$scope.map = map;
		};

		$scope.mapClick = function mapClick(e) {
			$scope.geoObjects = [];
			var coords;

			coords = e.get('coords');
			ymaps.geocode(coords).then(function geocode(res) {
				var names;
				names = [];
				res.geoObjects.each(function each(obj) {
					names.push(obj.properties.get('name'));
				});
				var geoObj;
				geoObj = {
					geometry: {
						type: 'Point',
						coordinates: coords
					},
					properties: {
						balloonContent: names.reverse().join(', ')
					}
				};

				vm.shop.longitude = coords[0].toPrecision(12);
				vm.shop.latitude = coords[1].toPrecision(12);
				$scope.$apply(function apply() {
					$scope.geoObjects = [];
					$scope.geoObjects.push(geoObj);
					vm.shop.address = geoObj.properties.balloonContent;
				});
			});
		};
}})();