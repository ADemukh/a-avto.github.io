(function GeoObjectsServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.geoobjects', GeoObjectsService);

    GeoObjectsService.$inject = ['_', 'services.neworder'];

    function GeoObjectsService(_, newOrderService) {
        // maps shopIds with geoObjects on the map
        var newOrderShops, shopsMapping;

        shopsMapping = new Map();
        newOrderShops = newOrderService.newOrder().shops;

        return {
            add: addGeoObject,
            select: setSelected,
            unselect: setUnselected
        };

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
        }

        function setUnselected(shopId) {
            var geoObj;

            geoObj = shopsMapping.get(shopId);
            geoObj.options.set('preset', 'islands#circleIcon');
            geoObj.options.set('iconColor', '#4d7198');
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