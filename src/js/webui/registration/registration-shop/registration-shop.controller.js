(function RegistrationShopControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
		controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['services.identity', '$state', '$scope', '$uibModal'];

	function RegistrationShopController(identity, $state, $scope, $uibModal) {
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
		vm.registerActionText = 'Зарегистрироваться';
		vm.passwordAlt = 'Пароль';
		vm.password2Alt = 'Повторите пароль';
		vm.policyTextPart1 = 'Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
		vm.policyLinkTextPart2 = 'Пользовательским соглашением';
		vm.policyTextPart3 = ' и даете ';
		vm.policyLinkTextPart4 = 'Согласие на обработку перносальных данных';

		vm.alertContactNameIsRequired = 'Введите наименование компании';
		vm.alertWWW = 'Введите адрес сайта магазина';
		vm.alertAdress = 'Отметьте адрес магазина на карте';
		vm.alertEmailIsRequired = 'Введите E-mail';
		vm.alertEmailIsNotCorrect = 'Неправильный E-mail';
		vm.alertPhoneIsNotCorrect = 'Номер не соответветствует шаблону +375 xx xxx xx xx';
		vm.alertPasswordIsRequired = 'Введите пароль';
		vm.alertPasswordsAreDifferent = 'Пароли не совпадают';

		vm.policyTextPart5 = '.';
		vm.shop = {
			longitude: '',
			latitude: '',
			address: ''
		};

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

		vm.selectAddressOnMap = function selectAddressOnMap() {
			var modalInstance;

			modalInstance = $uibModal.open({
				animation: false,
				component: 'qSelectShopAddressOnMap',
				resolve: {
					options: function options() {
						return {
							longitude: vm.shop.longitude,
							latitude: vm.shop.latitude
						};
					}
				}
			});

			modalInstance.result.then(
				function selected(selectedAddress) {
					vm.shop.longitude = selectedAddress.longitude;
					vm.shop.latitude = selectedAddress.latitude;
					vm.shop.address = selectedAddress.address;
				},
				function closed() {
				});
		};

		// vm.mapClick = function mapClick(e) {
		// 	var coords;

		// 	vm.geoObjects = [];
		// 	coords = e.get('coords');

		// 	ymaps.geocode(coords)
		// 		.then(function getGeoObj(res) {
		// 			var geoObj, names;

		// 			names = [];
		// 			res.geoObjects.each(function each(obj) {
		// 				names.push(obj.properties.get('name'));
		// 			});

		// 			geoObj = {
		// 				geometry: {
		// 					type: 'Point',
		// 					coordinates: coords
		// 				},
		// 				properties: {
		// 					balloonContent: names.reverse().join(', ')
		// 				}
		// 			};

		// 			$scope.$apply(function apply() {
		// 				vm.geoObjects = [];
		// 				vm.geoObjects.push(geoObj);
		// 			});

		// 			return geoObj;
		// 		})
		// 		.then(function mapResult(geoObj) {
		// 			return {
		// 				longitude: geoObj.geometry.coordinates[0].toPrecision(12),
		// 				latitude: geoObj.geometry.coordinates[1].toPrecision(12),
		// 				address: geoObj.properties.balloonContent
		// 			};
		// 		})
		// 		.then(function saveGeoData(geoObj) {
		// 			$scope.$apply(function apply() {
		// 				vm.shop.longitude = geoObj.longitude;
		// 				vm.shop.latitude = geoObj.latitude;
		// 				vm.shop.address = geoObj.address;
		// 			});
		// 		});
		// };
	}
})();