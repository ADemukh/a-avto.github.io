(function ClientCarControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.clientcar', ClientCarController);

	ClientCarController.$inject = [];

	function ClientCarController() {
		this.$onChanges = function onChanges(changes) {
			if (changes.car) {
				this.car = angular.copy(this.car);
				this.editMode = false;
			}
		};
		this.toEditMode = function toEditMode() {
			// todo
			this.editMode = true;
		};
		this.cancelEditMode = function cancelEditMode() {
			// todo
			this.editMode = false;
		};
		this.update = function updateCar(event) {
			if (event.car) {
				this.editMode = false;
				this.car = event.car;
				this.onUpdate({
					$event: {
						car: event.car
					}
				});
				this.cancelEditMode();
			}
		};
	}
})();