(function RegistrationShopControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
		controller('controllers.registrationshop', RegistrationShopController);

	RegistrationShopController.$inject = ['services.identity', '$state', '$scope', '$uibModal', 'services.webui.alerts'];

	function RegistrationShopController(identity, $state, $scope, $uibModal, alerts) {
		var vm;

		vm = this;
		vm.shop = {
			longitude: '',
			latitude: '',
			address: ''
		};

		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};

		vm.register = function onRegister(isValid) {
			if (isValid) {
				identity.signUpShop(vm.shop)
					.then(function complete(result) {
						if (result.alert) {
							vm.alerts = [alerts.danger(result.alert.message)];
						} else {
							vm.alerts = [alerts.success('Ваш магазин успешно зарегистрирован!')];
							$state.go('public.main');
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