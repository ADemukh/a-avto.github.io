(function FlexDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('flexXs', Flex);

    function Flex() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.flexXs) {
                case 'none':
                    {
                        element.addClass('flex-xs-none');
                        break;
                    }
                case 'initial':
                    {
                        element.addClass('flex-xs-initial');
                        break;
                    }
                case 'auto':
                    {
                        element.addClass('flex-xs-auto');
                        break;
                    }
                case 'grow':
                    {
                        element.addClass('flex-xs-grow');
                        break;
                    }
                case 'nogrow':
                    {
                        element.addClass('flex-xs-nogrow');
                        break;
                    }
                case 'noshrink':
                    {
                        element.addClass('flex-xs-noshrink');
                        break;
                    }
                case '66':
                    {
                        element.addClass('flex-xs-66');
                        break;
                    }
                case '33':
                    {
                        element.addClass('flex-xs-33');
                        break;
                    }
                default:
                    {
                        element.addClass('flex-xs');
                        break;
                    }
            }
        }
    }
})();