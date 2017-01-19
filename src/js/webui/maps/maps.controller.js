(function MapsControllerInit() {
    'use strict';

    angular.module('webui').
		controller('controllers.maps', MapsController);

	MapsController.$inject = ['shops', '$scope'];

	function MapsController(shops, $scope) {
		var adress, map, names, points, vm;

		vm = this;

		names = shops.getName();
		adress = shops.getAdress();
		vm.citys = ['Минск'];

		points = shops.getCoord();
		function createGeoObjects() {
			var geoObjects, i, point;

		    geoObjects = [];
		    for (i = 0; i < points.length; i += 1) {
		        point = points[i];
		        geoObjects.push({
		            geometry: {
		                type: 'Point',
		                coordinates: point
		            },
		            properties: {
		                balloonContentBody: '<h3>Название магазина:<br>"' + names[i] + '"<br></strong><br>Адрес:<br>' + adress[i] + '<br></h4><h3><button type="button">Запись на ремонт</button><br></h4>',
		                clusterCaption: 'метка <strong>' + i + '</strong>'
		            }
		        });
		    }
		    $scope.geoObjects = geoObjects;
		};
		createGeoObjects();


		$scope.beforeInit = function beforeInit() {
			$scope.$watch('vm.citys', function watchCity(newValue, oldValue) {});
				if (vm.citys !== 0) {
				    ymaps.geocode(vm.citys, { results: 1 })
						.then(function (res) {
							var firstGeoObject = res.geoObjects.get(0);
							$scope.$apply(function(){
								$scope.center = firstGeoObject.geometry.getCoordinates();
							});
				}, function (err) {
						alert(err.message);
					});
				}
		};
	}
})();



