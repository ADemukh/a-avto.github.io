(function CoreModuleInit() {
    'use strict';

    angular.module('aavto.core', [])
        .config(coreModuleConfig);

    coreModuleConfig.$inject = ['$httpProvider'];

    function coreModuleConfig($httpProvider) {
        setInterceptors();

        function setInterceptors() {
            $httpProvider.interceptors.push('core.interceptors.response');
        }
    }
})();