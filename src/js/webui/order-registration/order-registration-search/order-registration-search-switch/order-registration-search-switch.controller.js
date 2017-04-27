(function OrderRegistrationSearchSwitchControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.orderregistrationsearchswitch', OrderRegistrationSearchSwitchController);

	OrderRegistrationSearchSwitchController.$inject = [];

	function OrderRegistrationSearchSwitchController() {
		this.$onInit = function onInit() {
			var foundActiveOption;

			if (this.active && this.options) {
				foundActiveOption = findActiveInOption(this.options, this.active);
				if (foundActiveOption && foundActiveOption !== this.active) {
					this.setActive(foundActiveOption);
				}
			}
		};
		this.$onChanges = function onChanges(changes) {
			if (changes.options) {
				this.options = angular.copy(this.options);
			}
			if (changes.active) {
				this.active = angular.copy(this.active);
			}
		};

		this.setActive = function switchOption(option) {
			this.active = option;
			this.onSwitch({
				$event: {
					option: option
				}
			});
		};
		this.isActive = function isActive(option) {
			return this.active === option;
		};

		function findActiveInOption(options, activeOption) {
			return options.find(function containActive(option) {
				return activeOption.indexOf(option) >= 0;
			});
		}
	}
})();