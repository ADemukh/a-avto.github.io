(function AuthSocialControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.authsocial', AuthSocialController);

    AuthSocialController.$inject = ['services.identity', '$state'];

	function AuthSocialController(identity, $state) {
		var vm;

		vm = this;
		vm.authFacebook = function authFacebook() {
			identity.authFacebook()
				.then(successAuth, failedAuth);
		};
		vm.authVk = function authVk() {
			identity.authVk()
				.then(successAuth, failedAuth);
		};

		function successAuth() {
			if (identity.loggedIn()) {
				$state.go('main');
			}
		}

		function failedAuth(err) {
			vm.errorMessage = err.message;
			alert(err.message);
		}
	}
})();