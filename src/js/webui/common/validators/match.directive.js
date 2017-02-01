(function MatchDirectiveInit() {
    'use strict';

    angular.module('webui').directive('match', MatchDirective);

    function MatchDirective($parse) {
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function link(scope, elem, attrs, ctrl) {
                var caselessGetter, matchGetter, matchIgnoreEmptyGetter, noMatchGetter;

                if (!ctrl || !attrs.match) {
                    return;
                }

                matchGetter = $parse(attrs.match);
                caselessGetter = $parse(attrs.matchCaseless);
                noMatchGetter = $parse(attrs.notMatch);
                matchIgnoreEmptyGetter = $parse(attrs.matchIgnoreEmpty);

                scope.$watch(getMatchValue, function watch() {
                    ctrl.$$parseAndValidate();
                });

                ctrl.$validators.match = function matchFn(modelValue, viewValue) {
                    var match, matcher, notMatch, value;

                    matcher = modelValue || viewValue;
                    match = getMatchValue();
                    notMatch = noMatchGetter(scope);

                    if (matchIgnoreEmptyGetter(scope) && !viewValue) {
                        return true;
                    }

                    if (caselessGetter(scope)) {
                        value = angular.lowercase(matcher) === angular.lowercase(match);
                    } else {
                        value = matcher === match;
                    }
                    /*eslint no-bitwise:0 */
                    value ^= notMatch;
                    return !!value;
                };

                function getMatchValue() {
                    var match;

                    match = matchGetter(scope);
                    if (angular.isObject(match) && match.hasOwnProperty('$viewValue')) {
                        match = match.$viewValue;
                    }
                    return match;
                }
            }
        };
}
})();