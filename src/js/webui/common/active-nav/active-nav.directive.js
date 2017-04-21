(function ActiveNavDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).directive('activeNav', ActiveNavDirective);

    ActiveNavDirective.$inject = ['$location'];

    function ActiveNavDirective($location) {
        return {
            restrict: 'A',
            link: function link(scope, element, attrs) {
                var anchor, path;

                anchor = element[0];
                if (element[0].tagName.toUpperCase() !== 'A') {
                    anchor = element.find('a')[0];
                }

                path = anchor.href;

                scope.location = $location;
                scope.$watch('location.absUrl()', function watch(newPath) {
                    path = normalizeUrl(path);
                    newPath = normalizeUrl(newPath);

                    if (path === newPath ||
                        (attrs.activeNav === 'nestedTop' && newPath.indexOf(path) === 0)) {
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                });
            }

        };

        function normalizeUrl(url) {
            if (url[url.length - 1] !== '/') {
                url = url + '/';
            }
            return url;
        }
    }
})();