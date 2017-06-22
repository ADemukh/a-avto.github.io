(function ProfileShopSettingsOptionsControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME)
		.controller('controllers.profileshopsettingsoptions', ProfileShopSettingsOptionsController);

	ProfileShopSettingsOptionsController.$inject = ['services.shop', 'services.webui.alerts', 'services.identity', '$state', '$scope', '$uibModal', 'services.common'];

	function ProfileShopSettingsOptionsController(shopService, alerts, identityService, $state, $scope, $uibModal, common) {
		var vm;
		vm = this;

		common.services.adress.getCities().then(function onGetCities(citiess) {
			this.citiess = citiess;
		}.bind(this));

		common.services.category.getCategories().then(function onGetCategories(categories) {
			this.categories = categories;
		}.bind(this));

		common.services.car.getCars().then(function onGetCars(carMarkss) {
			this.carMarkss = carMarkss;
		}.bind(this));

		
		vm.resetServerError = function onChange() {
			// vm.alerts = null;
		};

		this.$onInit = function onChanges() {
			if (identityService.user.schedule){
				vm.schedule = identityService.user.schedule;
			}
			vm.cities = identityService.user.cities;
			vm.spareCategories = identityService.user.spareCategories;
			vm.carMarks = identityService.user.carMarks;
		};
		
		this.changeOptions = function changeOptions(isValid) {
			$scope.$watch('$ctrl.schedule', function watchCarModel() {
				if (isValid) {
					vm.user = {
						cities: vm.cities,
						spareCategories: vm.spareCategories,
						carMarks: vm.carMarks,
						schedule: vm.schedule
					}
					shopService.changeOptions(vm.user)
						.then(function complete(response) {
							vm.alerts = response.data.success ? [alerts.success(response.data.message)] : [alerts.danger(response.data.error)];
						});
				}
			});
		};

		vm.hours = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"];
		
		vm.schedule = {
					monday:{
						active: false, 
						from: from,
						to: to
					},	 
					tuesday:{
						active: false, 
						from: from,
						to: to
					},
					wednesday:{
						active: false, 
						from: from,
						to: to
					}, 
					thursday:{
						active: false, 
						from: from,
						to: to
					},
					friday:{
						active: false, 
						from: from,
						to: to
					},   
					saturday:{
						active: false, 
						from: from,
						to: to	
					}, 
					sunday:{
						active: false, 
						from: from,
						to: to
					}
				};

		var from = vm.hours[18];
		var to = vm.hours[36];

		vm.schedule.monday.active = false;
		vm.schedule.tuesday.active = false;
		vm.schedule.wednesday.active = false;
		vm.schedule.thursday.active = false;
		vm.schedule.friday.active = false;
		vm.schedule.saturday.active = false;
		vm.schedule.sunday.active = false;

		if (vm.schedule.monday.active == true && vm.schedule.tuesday.active == true && vm.schedule.wednesday.active == true && vm.schedule.thursday.active == true && vm.schedule.friday.active == true && vm.schedule.saturday.active==true && vm.schedule.sunday.active==true){
		vm.schedule.monday.from=from;
		vm.schedule.monday.to = to;

		vm.schedule.tuesday.from=from;
		vm.schedule.tuesday.to = to;

		vm.schedule.wednesday.from=from;
		vm.schedule.wednesday.to = to;

		vm.schedule.thursday.from=from;
		vm.schedule.thursday.to = to;

		vm.schedule.friday.from=from;
		vm.schedule.friday.to = to;

		vm.schedule.saturday.from=from;
		vm.schedule.saturday.to = to;

		vm.schedule.sunday.from=from;
		vm.schedule.sunday.to = to;
		}
		else if (vm.schedule.monday.active == false && vm.schedule.tuesday.active == false && vm.schedule.wednesday.active == false && vm.schedule.thursday.active == false && vm.schedule.friday.active == false && vm.schedule.saturday.active==false && vm.schedule.sunday.active==false){
		vm.schedule.monday.from=undefined;
		vm.schedule.monday.to = undefined;

		vm.schedule.tuesday.from=undefined;
		vm.schedule.tuesday.to = undefined;

		vm.schedule.wednesday.from=undefined;
		vm.schedule.wednesday.to = undefined;

		vm.schedule.thursday.from=undefined;
		vm.schedule.thursday.to = undefined;

		vm.schedule.friday.from=undefined;
		vm.schedule.friday.to = undefined;

		vm.schedule.saturday.from=undefined;
		vm.schedule.saturday.to = undefined;

		vm.schedule.sunday.from=undefined;
		vm.schedule.sunday.to = undefined;
		}
		vm.allCheckbox = function allCheckbox() {
			
				vm.schedule.tuesday.from=vm.schedule.monday.from;
				vm.schedule.tuesday.to = vm.schedule.monday.to;
				vm.schedule.tuesday.active = vm.schedule.monday.active;

				vm.schedule.wednesday.from=vm.schedule.monday.from;
				vm.schedule.wednesday.to = vm.schedule.monday.to;
				vm.schedule.wednesday.active = vm.schedule.monday.active;

				vm.schedule.thursday.from=vm.schedule.monday.from;
				vm.schedule.thursday.to = vm.schedule.monday.to;
				vm.schedule.thursday.active = vm.schedule.monday.active;

				vm.schedule.friday.from=vm.schedule.monday.from;
				vm.schedule.friday.to = vm.schedule.monday.to;
				vm.schedule.friday.active = vm.schedule.monday.active;

				vm.schedule.saturday.from=vm.schedule.monday.from;
				vm.schedule.saturday.to = vm.schedule.monday.to;
				vm.schedule.saturday.active = vm.schedule.monday.active;

				vm.schedule.sunday.from=vm.schedule.monday.from;
				vm.schedule.sunday.to = vm.schedule.monday.to;
				vm.schedule.sunday.active = vm.schedule.monday.active;
			
		}
	}
})();