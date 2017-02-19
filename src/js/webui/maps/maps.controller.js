(function MapsControllerInit() {
    'use strict';

    angular.module('webui').
		controller('controllers.maps', MapsController);

	MapsController.$inject = ['services.adress', 'services.category', 'services.cars', 'services.shops', '$scope', '$state', '_'];

	function MapsController(adress, category, cars, shops, $state, _) {
		var coord, geoObjects, i, map, point, vm;

		vm = this;

		vm.center = 'Минск';

		vm.cities = adress.getAdress();
		vm.categories = category.getCategory();

		cars.getCars().then(function onGetCars(carMarks) {
			vm.cars = carMarks;
		});

		shops.getShops().then(function getShops(shop) {
			function createGeoObjects() {
				geoObjects = [];
				vm.coll = shop.length;
				coord = shop;
				for (i = 0; i < coord.length; i += 1) {
					map = coord[i];
					point = [map.longitude, map.latitude];
					geoObjects.push({
						geometry: {
							type: 'Point',
							coordinates: point
						},
						properties: {
							balloonContentHeader: '<h3>"' + map.name + '"</h3>',
							balloonContentFooter: '<h4><button type="button" ><a href="#/order-registration" >Запись на ремонт</a></button><br></h4>',
							hintContent: map.name,
							balloonContentBody: '<h4><br>Адрес: ' + map.address + '<br><br></h4>'
						}
					});
				}
				vm.geoObjects = geoObjects;
			};
			createGeoObjects();
		});
	}
})();