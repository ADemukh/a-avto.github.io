(function CategoryServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.category', CategoryService);

    CategoryService.$inject = ['$q'];

    function CategoryService($q) {
        var categories;

        categories = [
            'Кузов',
            'Двигатель',
            'Фильтры',
            'Ременный привод',
            'Система подачи топлива',
            'Система выпуска',
            'Система охлаждения',
            'Система сцепления',
            'Коробка передач',
            'Тормозная система',
            'Подвеска/амортизация',
            'Рулевое управление',
            'Электрика',
            'Отопление/вентиляция/кондиционер',
            'Система очистки окон',
            'Элементы салона',
            'Диски/шины',
            'Стёкла',
            'Масла и другие тех. жидкости'
        ];

        return {
            getCategories: getCategories
        };

        function getCategories() {
            return $q.resolve(categories);
        }
    }
})();