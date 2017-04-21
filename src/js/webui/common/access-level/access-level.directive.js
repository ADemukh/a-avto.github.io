(function AccessLevelDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME).directive('accessLevel', AccessLevelDirective);

    AccessLevelDirective.$inject = ['services.identity'];

    function AccessLevelDirective(identity) {
        return {
            restrict: 'A',
            link: function link($scope, element, attrs) {
                var accessLevel, prevDisp, userRole;

                prevDisp = element.css('display');

                $scope.user = identity.user;
                $scope.$watch('user', function watch(user) {
                    if (user.role) {
                        userRole = user.role;
                    }
                    updateCSS();
                }, true);

                attrs.$observe('accessLevel', function observe(al) {
                    if (al) {
                        accessLevel = $scope.$eval(al);
                    }
                    updateCSS();
                });

                function updateCSS() {
                    if (userRole && accessLevel) {
                        if (identity.authorize(accessLevel, userRole)) {
                            element.css('display', prevDisp);
                        } else {
                            element.css('display', 'none');
                        }
                    }
                }
            }
        };
    }
})();