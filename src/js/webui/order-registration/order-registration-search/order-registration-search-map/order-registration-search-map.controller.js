(function OrderRegistrationSearchMapControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearchmap', OrderRegistrationSearchMapController);

	OrderRegistrationSearchMapController.$inject = ['services.common'];

	function OrderRegistrationSearchMapController(common) {
		this.$onChanges = function valueChanged() {
			common.services.shop.getShops(this.filters).then(function onGetShops(shops) {
				this.center = this.filters.city;
				this.shops = shops.map(function buildShopGeo(shop) {
					return {
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
					};
				});
				this.totalShops = this.shops && this.shops.length >= 0 ? this.shops.length : '';
			}.bind(this));
        };
	}
})();