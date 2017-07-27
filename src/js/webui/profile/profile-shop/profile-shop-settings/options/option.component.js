(function ProfileShopSettingsOptionsComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileShopSettingsOptions', {
            controller: 'controllers.profileshopsettingsoptions',
            templateUrl: 'webui/profile/profile-shop/profile-shop-settings/options/options.tmpl.html'
        })
        .controller('controllers.profileshopsettingsoptions', ProfileShopSettingsOptionsController);

    ProfileShopSettingsOptionsController.$inject = ['services.common', 'services.identity', 'services.webui.alerts'];

    function ProfileShopSettingsOptionsController(common, identityService, alerts) {
        var ALL_HOURS, DAY_TRANSLATIONS, DEFAULT_SCHEDULER;
        var vm;

        ALL_HOURS = [
            '00:00',
            '00:30',
            '01:00',
            '01:30',
            '02:00',
            '02:30',
            '03:00',
            '03:30',
            '04:00',
            '04:30',
            '05:00',
            '05:30',
            '06:00',
            '06:30',
            '07:00',
            '07:30',
            '08:00',
            '08:30',
            '09:00',
            '09:30',
            '10:00',
            '10:30',
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '14:00',
            '14:30',
            '15:00',
            '15:30',
            '16:00',
            '16:30',
            '17:00',
            '17:30',
            '18:00',
            '18:30',
            '19:00',
            '19:30',
            '20:00',
            '20:30',
            '21:00',
            '21:30',
            '22:00',
            '22:30',
            '23:00',
            '23:30'
        ];
        DAY_TRANSLATIONS = {
            monday: 'MONDAY',
            tuesday: 'TUESDAY',
            wednesday: 'WEDNESDAY',
            thursday: 'THURSDAY',
            friday: 'FRIDAY',
            saturday: 'SATURDAY',
            sunday: 'SUNDAY'
        };
        DEFAULT_SCHEDULER = {
            monday: {},
            tuesday: {},
            wednesday: {},
            thursday: {},
            friday: {},
            saturday: {},
            sunday: {}
        };
        vm = this;

        vm.$onInit = function onChanges() {
            common.services.adress.getCities().then(function onGetCities(cities) {
                vm.allCities = cities;
            });
            common.services.category.getCategories().then(function onGetCategories(categories) {
                vm.allCategories = categories;
            });
            common.services.car.getCars().then(function onGetCars(carMarks) {
                vm.allCarMarks = carMarks;
            });

            vm.cities = identityService.user.cities;
            vm.spareCategories = identityService.user.spareCategories;
            vm.carMarks = identityService.user.carMarks;
            vm.schedule = identityService.user.schedule || DEFAULT_SCHEDULER;
            vm.hours = ALL_HOURS;

            vm.resetServerError = function onChange() {};
            vm.applyToAll = function applyToAll(value) {
                var key;

                for (key in vm.schedule) {
                    if (vm.schedule.hasOwnProperty(key)) {
                        vm.schedule[key] = angular.copy(value);
                    }
                }
            };
            vm.changeOptions = function changeOptions(isValid) {
                if (isValid) {
                    common.services.shop.changeOptions({
                            cities: vm.cities,
                            spareCategories: vm.spareCategories,
                            carMarks: vm.carMarks,
                            schedule: vm.schedule
                        })
                        .then(function complete(response) {
                            vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
                        });
                }
            };
            vm.getDayTranslationKey = function getDayTranslationKey(day) {
                return DAY_TRANSLATIONS[day];
            };
        };
    }
})();