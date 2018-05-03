(function DialogServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.dialog', DialogService);
    DialogService.$inject = ['$http', 'services.identity'];

    function DialogService($http) {
        return {
            addMessageToDialog: addMessageToDialog,
        };

        function addMessageToDialog(dialog, author, content) {
            return $http.post('dialog/addMessage', {
                    dialogId: dialog._id,
                    author: author,
                    content: content
            })
            .then(function messageSavingSuccess(resp) {
                return resp.data;
            }, function messageSavingFailure() {
                console.log('Message failed saving to the dialog!');
            });
        }
    }
})();
