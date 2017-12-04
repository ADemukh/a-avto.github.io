//TODO: Fix this to accept multiple arguments for $emit
(function EventServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
           .factory('services.events', EventService);

    EventService.$inject = ['$rootScope'];

    function EventService($rootScope) {
        return {
            on: on,
            emit: emit,
            onerror: onerror,
            raiseError: raiseError
        };

        function onerror(callback) {
            return $rootScope.$on('error', callback);
        }

        function raiseError(errorContext) {
            $rootScope.$emit('error', errorContext);
        }

        function on(eventName, callback) {
            return $rootScope.$on(eventName, callback);
        }

        function emit(eventName, args) {
            $rootScope.$emit(eventName, args);
        }
    }
})();
