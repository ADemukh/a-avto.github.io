(function PasswordSetControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.passwordset', PasswordSetController);

	PasswordSetController.$inject = ['services.identity', '$state'];

	function PasswordSetController() {
		var vm;

		vm = this;
		vm.title = ' Изменение пороля';
		vm.oldPasswordAlt = 'Старый пороль';
		vm.newPasswordAlt = 'Новый пороль';
		vm.loginActinonText = 'Сохранить';
	}
})();