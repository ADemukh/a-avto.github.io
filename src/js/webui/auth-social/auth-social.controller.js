(function AuthSocialControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.authsocial', AuthSocialController);

	AuthSocialController.$inject = ['services.identity', '$state', 'services.webui.alerts'];

	function AuthSocialController(identity, $state, alerts) {
		this.authFacebook = function authFacebook() {
			identity.authFacebook()
				.then(successAuth.bind(this), failedAuth.bind(this));
		};
		this.authVk = function authVk() {
			identity.authVk()
				.then(successAuth.bind(this), failedAuth.bind(this));
		};

		function successAuth() {
			if (identity.loggedIn()) {
				identity.redirectToAttemptedUrl();
			}
		}

		function failedAuth(err) {
			this.alerts = [alerts.danger(err.message)];
		}
	}
})();