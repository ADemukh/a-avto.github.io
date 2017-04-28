(function ClientCarReadControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.clientcarread', ClientCarReadController);

	ClientCarReadController.$inject = [];

	function ClientCarReadController() {
		this.$onChanges = function onChanges(changes) {
			if (changes.car) {
				this.car = angular.copy(this.car);
			}
		};
		this.delete = function deleteCar() {
			this.onDelete({
				$event: {
					car: this.car
				}
			});
		};
		this.edit = function editCar() {
			this.onEdit();
		};
	}
})();