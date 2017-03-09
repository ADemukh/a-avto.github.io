(function LayoutDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('layoutXs', Layout);

    function Layout() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.layoutXs) {
                case 'column':
                    {
                        element.addClass('layout-xs-column');
                        break;
                    }
                default:
                case 'row':
                    {
                        element.addClass('layout-xs-row');
                        break;
                    }
            }
        }
    }
})();