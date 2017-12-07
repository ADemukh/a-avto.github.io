(function NewOrderCarNewComponentInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.component('qNewOrderCarNew', {
			templateUrl: 'webui/new-order/car/new/car-new.tmpl.html',
			controller: 'controllers.newordercarnew',
			require: {
				ngModelCtrl: 'ngModel'
			},
			bindings: {
				ngModel: '<'
			}
		})
		.controller('controllers.newordercarnew', NewOrderCarNewController);

	function NewOrderCarNewController() {
		this.$onInit = function onInit() {
			this.onCarChange = function onCarChange($event) {
				this.ngModel = angular.merge(this.ngModel, $event.car);
				this.ngModelCtrl.$setViewValue(this.ngModel);
			};
		};
	}
})();