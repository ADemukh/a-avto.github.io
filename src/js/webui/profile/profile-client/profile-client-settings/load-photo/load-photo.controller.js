(function ProfileClientSettingsLoadPhotoControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileclientsettingsloadphoto', ProfileClientSettingsLoadPhotoController);

	ProfileClientSettingsLoadPhotoController.$inject = [
		'services.file',
		'services.client',
		'services.webui.alerts',
		'services.identity',
		'$q'];

	function ProfileClientSettingsLoadPhotoController(fileService, clientService, alerts, identityService, $q) {
		var vm;

		vm = this;
		vm.$onInit = function onInit() {
			vm.photo = identityService.user.photo || {
				thumbUrl: 'img/user-logo.png'
			};
			vm.changePhoto = function changePhoto() {
				if (vm.uploadForm.file.$valid && vm.file) {
					vm.loading = true;
					fileService.uploadImage(vm.file)
						.then(function onUpload(response) {
							if (response && response.data && response.data.success) {
								return clientService.changePhoto(response.data.details);
							}
							return $q.reject();
						})
						.then(function onChange() {
							vm.alerts = [alerts.success('Фото изменено.')];
							vm.photo = identityService.user.photo;
							vm.file = null;
						})
						.catch(function failure() {
							vm.alerts = [alerts.danger('Не удалось изменить фото.')];
						})
						.finally(function complete() {
							vm.loading = false;
						});
				}
			};
		};
	}
})();