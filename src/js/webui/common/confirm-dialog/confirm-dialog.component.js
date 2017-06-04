(function DialogsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qConfirmDialog', {
            templateUrl: 'webui/common/confirm-dialog/confirm-dialog.tmpl.html',
            bindings: {
				resolve: '<',
				close: '&',
				dismiss: '&'
            }
        });
})();