(function DatetimepickerDirectiveInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .directive('datetimepicker', DatetimepickerDirective);

    DatetimepickerDirective.$inject = ['$timeout', 'moment'];

    function DatetimepickerDirective($timeout, moment) {
        return {
            restrict: 'EA',
            require: '?ngModel',
            link: function linkDatetimepicker($scope, $element, $attrs, ngModelCtrl) {
                var dpApi, dpElement, dpOptions;

                dpOptions = $scope.$ctrl.dpOptions;
                dpElement =  $element.parent().hasClass('input-group') ? $element.parent() : $element;
                dpElement.datetimepicker(dpOptions);
                dpApi = dpElement.data('DateTimePicker');

                dpElement.on('dp.change', function dpChange(e) {
                    var newValue;

                    if (!isDateEqual(e.date, ngModelCtrl.$viewValue)) {
                        newValue = e.date === false ? null : e.date;

                        ngModelCtrl.$setViewValue(newValue);

                        $timeout(function change() {
                            if (typeof $scope.$ctrl.dpChange === 'function') {
                                $scope.$ctrl.dpChange(newValue);
                            }
                        });
                    }
                });

                ngModelCtrl.$render = function render() {
                    var currentDate;

                    // if value is undefined/null do not do anything, unless some date was set before
                    currentDate = dpApi.date();
                    if (!ngModelCtrl.$viewValue && currentDate) {
                        dpApi.clear();
                    } else if (ngModelCtrl.$viewValue) {
                        // otherwise make sure it is moment object
                        if (!moment.isMoment(ngModelCtrl.$viewValue)) {
                            ngModelCtrl.$setViewValue(moment(ngModelCtrl.$viewValue));
                        }
                        dpApi.date(ngModelCtrl.$viewValue);
                    }
                };

                function isDateEqual(d1, d2) {
                    return moment.isMoment(d1) && moment.isMoment(d2) && d1.valueOf() === d2.valueOf();
                }
            }
        };
    }
})();