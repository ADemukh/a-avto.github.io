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
            ngModel: '<',
            options: '<'
          }
        })
        .controller('controllers.datetimepicker', DateTimePickerController);

        DateTimePickerController.$inject = ['moment'];

    function DateTimePickerController(moment) {
        var clientFormat, serverFormat;

        clientFormat = 'LL';
        serverFormat = 'DD-MM-YYYY';

        this.$onInit = function onInit() {
            this.dpOptions = this.options || {
                format: clientFormat
            };
            this.dpChange = function selected(newValueMoment) {
                this.ngModelCtrl.$setViewValue(newValueMoment ? newValueMoment.format(serverFormat) : '');
            };
        };

        this.$onChanges = function onChanges() {
            this.dpValue = this.ngModel && moment(this.ngModel, serverFormat).isValid() ? moment(this.ngModel, serverFormat) : '';
        };
    }
})();