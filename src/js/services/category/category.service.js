(function CategoryServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.category', CategoryService);

    function CategoryService() {
        var category;

        category = ['Кузов', 'Двигатель', 'Фильтры', 'Ременный привод', 'Система подачи топлива', 'Система выпуска', 'Система охлаждения', 'Система сцепления', 'Коробка передач', 'Тормозная система', 'Подвеска/амортизация', 'Рулевое управление', 'Электрика', 'Отопление/вентиляция/кондиционер', 'Система очистки окон', 'Элементы салона', 'Диски/шины', 'Стёкла', 'Масла и другие тех. жидкости'];

        return {
            getCategory: getCategory
        };

        function getCategory() {
            return category;
        }
    }
})();