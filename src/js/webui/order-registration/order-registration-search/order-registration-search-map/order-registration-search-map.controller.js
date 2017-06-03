(function OrderRegistrationSearchMapControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearchmap', OrderRegistrationSearchMapController);

	function OrderRegistrationSearchMapController() {
		this.$onChanges = function valueChanged() {
			if (this.shops && this.shops.length) {
				this.center = this.filters.shopCity;
				this.totalShops = this.shops && this.shops.length >= 0 ? this.shops.length : '';
				this.builtShops = this.shops.map(function buildShopGeo(shop) {
					return {
						geometry: {
							type: 'Point',
							coordinates: [shop.longitude, shop.latitude]
						},
						properties: {
							name: shop.name,
							balloonContentHeader: '<h3>"' + shop.name + '"</h3>',
							balloonContentFooter: '<h4><button type="button" ><a href="#/order-registration" >Запись на ремонт</a></button><br></h4>',
							hintContent: shop.name,
							balloonContentBody: '<h4><br>Адрес: ' + shop.address + '<br><br></h4>'
						}
					};
				});
			}
		};
	}
})();