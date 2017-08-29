/*eslint strict:0  */
var carsInitialCollection, cityInitialCollection, enginecapacitesInitialCollection, enginetypesInitialCollection, gearboxesInitialCollection, notificationsInitialCollection, spareInitialCollection;
var carController, cityController, notificationsController;

carsInitialCollection = require('../init/cars');
spareInitialCollection = require('../init/spareTypes');
gearboxesInitialCollection = require('../init/gearboxes');
enginetypesInitialCollection = require('../init/engineTypes');
enginecapacitesInitialCollection = require('../init/engineCapacities');
cityInitialCollection = require('../init/cities');
notificationsInitialCollection = require('../init/notifications');
carController = require('../controllers/car');
cityController = require('../controllers/city');
notificationsController = require('../controllers/notifications');

module.exports = {
	initSpareTypes: function initSpareTypes() {
		var promises;

		promises = [];
		spareInitialCollection.forEach(function each(spareItem) {
			promises.push(carController.addSpare(spareItem));
		});
		return Promise.all(promises);
	},
	initCars: function initCars() {
		var promises;

		promises = [];
		carsInitialCollection.forEach(function each(carItem) {
			promises.push(carController.addMark(carItem));
		});
		return Promise.all(promises);
	},
	initCities: function initCities() {
		var promises;

		promises = [];
		cityInitialCollection.forEach(function each(cityItem) {
			promises.push(cityController.addCity(cityItem));
		});
		return Promise.all(promises);
	},
	initNotifications: function initNotifications() {
		var promises;

		promises = [];
		notificationsInitialCollection.forEach(function each(notificationItem) {
			promises.push(notificationsController.addNotification(notificationItem));
		});
		return Promise.all(promises);
	},
	initEngineCapacites: function initEngineCapacites() {
		var promises;

		promises = [];
		enginecapacitesInitialCollection.forEach(function each(enginecapacity) {
			promises.push(carController.addEngineCapacity(enginecapacity));
		});
		return Promise.all(promises);
	},
	initEngineTypes: function initEngineTypes() {
		var promises;

		promises = [];
		enginetypesInitialCollection.forEach(function each(enginetypes) {
			promises.push(carController.addEngineType(enginetypes));
		});
		return Promise.all(promises);
	},
	initGearBoxes: function initGearBoxes() {
		var promises;

		promises = [];
		gearboxesInitialCollection.forEach(function each(gearboxes) {
			promises.push(carController.addGearbox(gearboxes));
		});
		return Promise.all(promises);
	}
};