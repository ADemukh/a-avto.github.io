(function AdressServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('core.interceptors.response', ResponseInterceptorService);

    ResponseInterceptorService.$inject = ['$q'];

    function ResponseInterceptorService($q) {
        return {
            response: responseInterceptor
        };

        function responseInterceptor(response) {
            if (response.config.method === 'POST' && !response.data.item && response.data.error) {
                return $q.reject(response);
            }
            return response;
        }
    }
})();