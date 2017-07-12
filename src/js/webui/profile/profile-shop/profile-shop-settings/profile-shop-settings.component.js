(function ProfileShopComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileShopSettings', {
            controller: 'controllers.profileshopsettings',
            templateUrl: 'webui/profile/profile-shop/profile-shop-settings/profile-shop-settings.tmpl.html'
        })
        .controller('controllers.profileshopsettings', ProfileShopSettingsController);

    ProfileShopSettingsController.$inject = ['services.shop', 'services.notifications'];

    function ProfileShopSettingsController(shopService, notificationsService) {
        this.changeUserPhoto = shopService.changePhoto;
        this.changeUserPassword = shopService.changePassword;
        this.changeUserNotifications = shopService.changeNotifications;
        this.getUserNotifications = notificationsService.getShopNotifications;
    }
})();