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
                fetchAllCategories({});
            }
            return dfd.promise;
        }

        function fetchAllCategories(filter) {
            return $http.get('spares/getSpares', filter)
                .then(function response(resp) {
                    categories = resp.data;
                    dfd.resolve(categories);
                });
        }
        return {
            getCategories: getCategories
        };

        function getCategories() {
            return getAllCategories()
                .then(function gotCategories(foo) {
                    var allCategories, i;

                    allCategories = [];
                    for (i = 0; i < foo.length; i += 1) {
                        allCategories.push(foo[i].name);
                    }
                    return allCategories;
                });
        }
    }
})();