(function CategoryServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.category', CategoryService);

    CategoryService.$inject = ['$q', '$http'];

    function CategoryService($q, $http) {
        var dfdSpareTypes;

        function getAllCategories() {
            if (!dfdSpareTypes) {
                dfdSpareTypes = $q.defer();
                fetchAllCategories();
            }
            return dfdSpareTypes.promise;
        }

        function fetchAllCategories() {
            var i;

            return $http.get('cars/getSpareTypes', {})
                .then(function response(resp) {
                    var categories;

                    categories = [];
                    for (i = 0; i < resp.data.length; i += 1) {
                        categories.push(resp.data[i].name);
                    }
                    dfdSpareTypes.resolve(categories);
                });
        }
        return {
            getCategories: getCategories
        };

        function getCategories() {
            return getAllCategories()
                .then(function gotCategories(foo) {
                    return foo;
                });
        }
    }
})();