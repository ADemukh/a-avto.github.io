(function FlexDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('flexSm', Flex);

    function Flex() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.flexSm) {
                case 'none':
                    {
                        element.addClass('flex-sm-none');
                        break;
                    }
                case 'initial':
                    {
                        element.addClass('flex-sm-initial');
                        break;
                    }
                case 'auto':
                    {
                        element.addClass('flex-sm-auto');
                        break;
                    }
                case 'grow':
                    {
                        element.addClass('flex-sm-grow');
                        break;
                    }
                case 'nogrow':
                    {
                        element.addClass('flex-sm-nogrow');
                        break;
                    }
                case 'noshrink':
                    {
                        element.addClass('flex-sm-noshrink');
                        break;
                    }
                case '66':
                    {
                        element.addClass('flex-sm-66');
                        break;
                    }
                case '33':
                    {
                        element.addClass('flex-sm-33');
                        break;
                    }
                default:
                    {
                        element.addClass('flex-sm');
                        break;
                    }
            }
        }
    }
})();