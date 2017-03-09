(function LayoutDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('layout', Layout);

    function Layout() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.layout) {
                case 'column':
                    {
                        element.addClass('layout-column');
                        break;
                    }
                default:
                case 'row':
                    {
                        element.addClass('layout-row');
                        break;
                    }
            }
        }
    }
})();