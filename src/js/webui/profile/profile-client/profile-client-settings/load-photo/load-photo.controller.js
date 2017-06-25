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
				url: 'img/user-logo.png'
			};
			vm.changePhoto = function changePhoto() {
				if (vm.uploadForm.file.$valid && vm.file) {
					fileService.uploadImage(vm.file)
						.then(function onUpload(response) {
							if (response && response.data && response.data.success) {
								return clientService.changePhoto(response.data.details);
							}
							// set alerts here!
						})
						.then(function onChange() {
							vm.photo = identityService.user.photo;
							vm.file = null;
						})
						.catch(function failure(errorMessage) {});
				}
			};
		};
	}
})();