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
            unselect: setUnselected,
            checkSelection: checkSelection,
            updateGeoObjectRating: updateGeoObjectRating
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
            var geoObj, geoObjElement;

            geoObj = shopsMapping.get(shopId);
            // escape the case when a shop doesn't have a coords, which mean that it also doesn't have an associated geoObj
            if (geoObj) {
                geoObj.options.set('preset', 'islands#circleDotIcon');
                geoObj.options.set('iconColor', '#ff6600');
            }
            geoObjElement = document.getElementById('geo-object-select');
            // geoObject DOM-element doesn't exists when it's not included in a current map scope
            if (geoObjElement) {
                if (processedShop && shopId === processedShop._id) {
                    angular.element(geoObjElement).text($translate.instant('CANCEL'));
                }
                geoObjElement.classList.add('selected');
            }
        }

        function setUnselected(shopId) {
            var geoObj, geoObjElement;

            geoObj = shopsMapping.get(shopId);
            if (geoObj) {
                geoObj.options.set('preset', 'islands#circleIcon');
                geoObj.options.set('iconColor', '#4d7198');
            }
            geoObjElement = document.getElementById('geo-object-select');
            if (geoObjElement) {
                if (processedShop && shopId === processedShop._id) {
                    angular.element(geoObjElement).text($translate.instant('SELECT'));
                }
                geoObjElement.classList.remove('selected');
            }
        }

        function updateGeoObjectRating() {
            var rating, stars;

            stars = document.getElementById('geo-object-rating').children;
            // rating = processedShop.rating;
            rating = Math.random() * 6;

            _.forEach(stars, function checkStar(star, index) {
                if ((star.classList.contains('filled') && index >= rating) ||
                    (!star.classList.contains('filled') && index < rating)) {
                    star.classList.toggle('filled');
                }
            });
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