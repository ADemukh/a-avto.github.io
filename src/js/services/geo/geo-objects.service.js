(function GeoObjectsServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.geoobjects', GeoObjectsService);

    GeoObjectsService.$inject = ['_', '$translate', 'services.neworder'];

    function GeoObjectsService(_, $translate, newOrderService) {
        // maps shopIds with geoObjects on the map
        var newOrderShops, processedShop, shopsMapping;

        newOrderShops = newOrderService.newOrder().shops;
        shopsMapping = new Map();

        return {
            getProcessedShop: getProcessedShop,
            setProcessedShop: setProcessedShop,
            add: addGeoObject,
            select: setSelected,
            unselect: setUnselected
        };

        function getProcessedShop() {
            return processedShop;
        }

        function setProcessedShop(shop) {
            processedShop = shop;
        }

        function addGeoObject(geoObj) {
            var shopId;

            shopId = _.get(geoObj, 'properties._data.shop')._id;
            shopsMapping.set(shopId, geoObj);
            checkSelection(shopId);
        }

        function setSelected(shopId) {
            var geoObj;

            geoObj = shopsMapping.get(shopId);
            geoObj.options.set('preset', 'islands#circleDotIcon');
            geoObj.options.set('iconColor', '#ff6600');

            if (processedShop && shopId === processedShop._id) {
                angular.element(document.getElementById('geo-object-select')).text($translate.instant('CANCEL'));
            }
        }

        function setUnselected(shopId) {
            var geoObj;

            geoObj = shopsMapping.get(shopId);
            geoObj.options.set('preset', 'islands#circleIcon');
            geoObj.options.set('iconColor', '#4d7198');

            if (processedShop && shopId === processedShop._id) {
                angular.element(document.getElementById('geo-object-select')).text($translate.instant('SELECT'));
            }
        }

        function checkSelection(shopId) {
            if (_.indexOf(newOrderShops, shopId) >= 0) {
                setSelected(shopId);
            } else {
                setUnselected(shopId);
            }
        }
    }
})();