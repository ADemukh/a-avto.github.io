(function ProfileShopSettingsOptionsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettingsoptions', ProfileShopSettingsOptionsController);

	ProfileShopSettingsOptionsController.$inject = ['services.common', 'services.identity', 'services.webui.alerts'];

	function ProfileShopSettingsOptionsController(common, identityService, alerts) {
		var vm;
		var ACTIVE, ALL_HOURS, DAY_TRANSLATIONS, DEFAULT_SCHEDULER;

		vm = this;

		ALL_HOURS = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
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
			qednesday: {},
			thursday: {},
			friday: {},
			saturday: {},
			sunday: {}
		}

		vm.$onInit = function onChanges() {
			common.services.adress.getCities().then(function onGetCities(citiess) {
				vm.citiess = citiess;
			});
			common.services.category.getCategories().then(function onGetCategories(categories) {
				vm.categories = categories;
			});
			common.services.car.getCars().then(function onGetCars(carMarkss) {
				vm.carMarkss = carMarkss;
			});

			vm.cities = identityService.user.cities;
			vm.spareCategories = identityService.user.spareCategories;
			vm.carMarks = identityService.user.carMarks;
			vm.schedule = identityService.user.schedule ?
				identityService.user.schedule :
				DEFAULT_SCHEDULER;
			vm.hours = ALL_HOURS;


			vm.resetServerError = function onChange() {};
			vm.applyToAll = function applyToAll(value) {
				for (var key in vm.schedule) {
					if (vm.schedule.hasOwnProperty(key)) {
						vm.schedule[key] = angular.copy(value);
					}
				}
			}
			vm.changeOptions = function changeOptions(isValid) {
				if (isValid) {
					shopService.changeOptions({
							cities: vm.cities,
							spareCategories: vm.spareCategories,
							carMarks: vm.carMarks,
							schedule: vm.schedule
						})
						.then(function complete(response) {
							vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
						});;

				}
			};
			vm.getDayTranslationKey = function(day) {
				return DAY_TRANSLATIONS[day];
			}
		};
	}
})();