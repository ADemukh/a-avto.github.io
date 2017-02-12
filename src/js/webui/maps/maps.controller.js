(function MapsControllerInit() {
    'use strict';

    angular.module('webui').
		controller('controllers.maps', MapsController);

	MapsController.$inject = ['shops', '$scope', '$state', '_'];

	function MapsController(shops, $scope, $state, _) {
		var adress = [], i, map, names, points, vm;

		vm = this;
		vm.center = 'Минск';
		vm.citys = ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест', 'Бобруйск', 'Барановичи', 'Борисов', 'Пинск', 'Орша', 'Мозырь', 'Солигорск', 'Новополоцк', 'Лида', 'Молодечно', 'Полоцк', 'Жлобин', 'Светлогорск', 'Речица'];

		shops.getShops().then(function getShops(shop) {
			function createGeoObjects() {
				var geoObjects, point;

				adress = shop;
				geoObjects = [];
				vm.coll = shop.length;
				for (i = 0; i < adress.length; i += 1) {
					map = _.map(adress[i]);
					point = [map[3], map[4]];
					geoObjects.push({
						geometry: {
							type: 'Point',
							coordinates: point
						},
						properties: {
							balloonContentHeader: '<h3>"' + map[1] + '"</h3>',
							balloonContentFooter: '<h4><button type="button" ><a href="#/order-registration" >Запись на ремонт</a></button><br></h4>',
							hintContent: map[1],
							balloonContentBody: '<h4><br>Адрес: ' + map[2] + '<br><br></h4>'
						}
					});
				}
				vm.geoObjects = geoObjects;
			};
			createGeoObjects();
		});
	}
})();



