(function FlexDirectiveInit() {
    'use strict';

    angular
        .module(WEBUI_MODULE_NAME)
        .directive('flexGtSm', Flex);

    function Flex() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            switch (attrs.flexGtSm) {
                case 'none':
                    {
                        element.addClass('flex-gt-sm-none');
                        break;
                    }
                case 'initial':
                    {
                        element.addClass('flex-gt-sm-initial');
                        break;
                    }
                case 'auto':
                    {
                        element.addClass('flex-gt-sm-auto');
                        break;
                    }
                case 'grow':
                    {
                        element.addClass('flex-gt-sm-grow');
                        break;
                    }
                case 'nogrow':
                    {
                        element.addClass('flex-gt-sm-nogrow');
                        break;
                    }
                case 'noshrink':
                    {
                        element.addClass('flex-gt-sm-noshrink');
                        break;
                    }
                case '33':
                    {
                        element.addClass('flex-gt-sm-33');
                        break;
                    }
                case '66':
                    {
                        element.addClass('flex-gt-sm-66');
                        break;
                    }
                default:
                    {
                        element.addClass('flex-gt-sm');
                        break;
                    }
            }
        }
    }
})();