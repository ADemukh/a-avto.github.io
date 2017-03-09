(function FlexDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('flex', Flex);

    function Flex() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.flex) {
                case 'none':
                    {
                        element.addClass('flex-none');
                        break;
                    }
                case 'initial':
                    {
                        element.addClass('flex-initial');
                        break;
                    }
                case 'auto':
                    {
                        element.addClass('flex-auto');
                        break;
                    }
                case 'grow':
                    {
                        element.addClass('flex-grow');
                        break;
                    }
                case 'nogrow':
                    {
                        element.addClass('flex-nogrow');
                        break;
                    }
                case 'noshrink':
                    {
                        element.addClass('flex-noshrink');
                        break;
                    }
                case '33':
                    {
                        element.addClass('flex-33');
                        break;
                    }
                case '66':
                    {
                        element.addClass('flex-66');
                        break;
                    }
                default:
                    {
                        element.addClass('flex');
                        break;
                    }
            }
        }
    }
})();