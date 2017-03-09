(function LayoutDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('layoutSm', Layout);

    function Layout() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.layoutSm) {
                case 'column':
                    {
                        element.addClass('layout-sm-column');
                        break;
                    }
                default:
                case 'row':
                    {
                        element.addClass('layout-sm-row');
                        break;
                    }
            }
        }
    }
})();