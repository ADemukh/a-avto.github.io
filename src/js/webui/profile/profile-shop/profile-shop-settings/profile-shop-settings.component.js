(function ProfileShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileShopSettings', {
            controller: 'controllers.profileshopsettings',
            templateUrl: 'webui/profile/profile-shop/profile-shop-settings/profile-shop-settings.tmpl.html'
        });
})();