(function VideoDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qVideo', VideoDirective);

    function VideoDirective() {
        return {
                restrict: 'E',
                templateUrl: 'webui/video/video.tmpl.html',
                scope: {}
        };
    }
})();