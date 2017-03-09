(function LayoutDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('layoutMargin', Layout);

    function Layout() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element) {
            element.addClass('layout-margin');
        }
    }
})();