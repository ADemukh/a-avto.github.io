(function ProfileClientSettingsLoadPhotoControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientsettingsloadphoto', ProfileClientSettingsLoadPhotoController);

	ProfileClientSettingsLoadPhotoController.$inject = ['services.file', 'services.client', 'services.webui.alerts', 'services.identity'];

	function ProfileClientSettingsLoadPhotoController(fileService, clientService, alerts, identityService) {
		var vm;

		vm = this;
		vm.$onInit = function onInit() {
			vm.photo = identityService.user.photo || {
				srcUrl: 'img/user-logo.png'
			};
			vm.changePhoto = function changePhoto() {
				if (vm.uploadForm.file.$valid && vm.file) {
					fileService.upload(vm.file)
						.then(clientService.changePhoto)
						.then(function success(response) {
							vm.photo = identityService.user.photo;
							vm.file = null;
						})
						.catch(function failure(errorMessage) {});
				}
			};
		};
	}
})();