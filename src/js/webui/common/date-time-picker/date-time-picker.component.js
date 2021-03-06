(function ControlDateComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qDateTimePicker', {
          controller: 'controllers.datetimepicker',
          templateUrl: 'webui/common/date-time-picker/date-time-picker.tmpl.html',
          require: {
            ngModelCtrl: 'ngModel'
          },
          bindings: {
            options: '<',
            ngModel: '<'
          }
        })
        .controller('controllers.datetimepicker', DateTimePickerController);

        DateTimePickerController.$inject = ['moment'];

    function DateTimePickerController(moment) {
        var clientFormat, defaultOptions, serverFormat;

        clientFormat = 'LL';
        serverFormat = 'YYYY-MM-DD';
        defaultOptions = {
            format: clientFormat
        };

        this.$onInit = function onInit() {
            this.dpOptions = angular.merge({}, defaultOptions, this.options);
            this.dpChange = function selected(newValueMoment) {
                this.ngModelCtrl.$setViewValue(newValueMoment ? newValueMoment.format(serverFormat) : '');
            };
        };

        this.$onChanges = function onChanges() {
            this.dpValue = this.ngModel && moment(this.ngModel, serverFormat).isValid() ? moment(this.ngModel, serverFormat) : '';
        };
    }
})();