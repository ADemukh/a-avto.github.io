(function DialogServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.dialog', DialogService);
    DialogService.$inject = ['$http', 'services.identity'];

    function DialogService($http, identityService) {
        return {
        };

        // function addMessageToDialog(author, content) {
        //     return $http.post('dialog/addMessage', {
        //             id: id
        //     })
        //     .then(function gotDialogs(resp) {
        //         return resp.data;
        //     });
        // }
    }
})();
