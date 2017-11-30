(function SelectShopAddressOnMapComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qSelectCoordinatesOnMap', {
			controller: 'controllers.selectcoordinatesonmap',
			bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
			},
			templateUrl: 'webui/common/select-coordinates-on-map/select-coordinates-on-map.tmpl.html'
		})
		.controller('controllers.selectcoordinatesonmap', SelectCoordinatesOnMapController);

	SelectCoordinatesOnMapController.$inject = ['$scope'];

	function SelectCoordinatesOnMapController($scope) {
		var vm;

		vm = this;
		this.$onInit = function init() {
			vm.onMapInit = function onMapInit() {
				getGeoObj([vm.resolve.options.longitude, vm.resolve.options.latitude])
					.then(putGeoObjOnMap)
					.then(selectGeoObj);
			};

			vm.ok = function ok() {
				vm.close({
					$value: vm.selected
				});
			};

			vm.cancel = function cancel() {
				vm.dismiss({
					$value: 'cancel'
				});
			};

			vm.mapClick = function mapClick(e) {
				getGeoObj(e.get('coords'))
					.then(putGeoObjOnMap)
					.then(selectGeoObj);
			};

			function getGeoObj(coords) {
				return ymaps.geocode(coords)
					.then(function buildGeoObj(res) {
						var geoObj, names;

						names = [];
						res.geoObjects.each(function each(obj) {
							names.push(obj.properties.get('name'));
						});

						geoObj = {
							geometry: {
								type: 'Point',
								coordinates: coords
							},
							properties: {
								balloonContent: names.reverse().join(', ')
							}
						};

						return geoObj;
					});
			}

			function putGeoObjOnMap(geoObj) {
				$scope.$apply(function apply() {
					vm.geoObj = geoObj;
				});

				return geoObj;
			}

			function selectGeoObj(geoObj) {
				vm.selected = {
					longitude: geoObj.geometry.coordinates[0].toPrecision(12),
					latitude: geoObj.geometry.coordinates[1].toPrecision(12)
				};
			}
		};
	}
})();