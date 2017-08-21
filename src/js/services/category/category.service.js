(function CategoryServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.category', CategoryService);

    CategoryService.$inject = ['$q', '$http'];

    function CategoryService($q, $http) {
        var categories, dfd;

        function getAllCategories() {
            if (!dfd) {
                dfd = $q.defer();
                fetchAllCategories();
            }
            return dfd.promise;
        }

        function fetchAllCategories() {
            var i;

            return $http.get('cars/getSpareTypes', {})
                .then(function response(resp) {
                    categories = [];
                    for (i = 0; i < resp.data.length; i += 1) {
                        categories.push(resp.data[i].name);
                    }
                    dfd.resolve(categories);
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