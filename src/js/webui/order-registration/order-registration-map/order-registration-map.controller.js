(function OrderRegistrationMapControllerInit() {
	'use strict';

	angular.module('webui').
	controller('controllers.orderregistrationmap', OrderRegistrationMapController);

	OrderRegistrationMapController.$inject = ['services.adress', 'services.category', 'services.cars', 'services.shops', '$state', '_'];

	function OrderRegistrationMapController(adressService, categoryService, carsService, shopsService, $state, _) {
		var vm;

		vm = this;
		vm.isNew = true;

		adressService.getCities().then(function onGetCities(cities) {
			vm.city = cities[0];
			vm.cities = cities;
		});
		carsService.getCars().then(function onGetCars(carMarks) {
			vm.cars = carMarks;
		});
		categoryService.getCategories().then(function onGetCategories(categories) {
			vm.categories = categories;
		});
		shopsService.getShops().then(function onGetShops(shops) {
			var geoObjects, i, shop;

			geoObjects = [];
			for (i = 0; i < shops.length; i += 1) {
				shop = shops[i];
				geoObjects.push({
					geometry: {
						type: 'Point',
						coordinates: [shop.longitude, shop.latitude]
					},
					properties: {
						balloonContentHeader: '<h3>"' + shop.name + '"</h3>',
						balloonContentFooter: '<h4><button type="button" ><a href="#/order-registration" >Запись на ремонт</a></button><br></h4>',
						hintContent: shop.name,
						balloonContentBody: '<h4><br>Адрес: ' + shop.address + '<br><br></h4>'
					}
				});
			}
			vm.shopsCount = shops.length;
			vm.geoObjects = geoObjects;
		});
	}
})();