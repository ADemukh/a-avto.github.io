(function AuthSocialControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.authsocial', AuthSocialController);

    AuthSocialController.$inject = ['services.identity'];

	function AuthSocialController(identity) {
		var vm;

		vm = this;
		vm.authFacebook = function authFacebook() {
			identity.authFacebook();
		};
		vm.authVkontakte = function authVkontakte() {
		};
	}
})();