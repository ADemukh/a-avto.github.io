//webui.module.js
(function WebUIModuleInit() {
	"use strict";
	
	angular.module("webui", ['ui.router', 'services'])
        .config(WebUIModuleConfig);

    WebUIModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function WebUIModuleConfig($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	$stateProvider.state('home',{
    		url: '/',
			views: {
				'navigation': {
					templateUrl: 'webui/navigation/navigation.tmpl.html'
				},
				'heading': {
					templateUrl: 'webui/heading/heading.tmpl.html'
				},
				'footer': {
					templateUrl: 'webui/footer/footer.tmpl.html'
				}
			}
		})
    }
})();

