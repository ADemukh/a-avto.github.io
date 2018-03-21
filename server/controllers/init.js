/* eslint strict:0  */
let carsInitialCollection,
    cityInitialCollection,
    enginecapacitesInitialCollection,
    enginetypesInitialCollection,
    gearboxesInitialCollection,
    notificationsInitialCollection,
    spareInitialCollection;
let carController,
    cityController,
    notificationsController;

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
        let promises;

        promises = [];
        spareInitialCollection.forEach((spareItem) => {
            promises.push(carController.addSpare(spareItem));
        });
        return Promise.all(promises);
    },
    initCars: function initCars() {
        let promises;

        promises = [];
        carsInitialCollection.forEach((carItem) => {
            promises.push(carController.addMark(carItem));
        });
        return Promise.all(promises);
    },
    initCities: function initCities() {
        let promises;

        promises = [];
        cityInitialCollection.forEach((cityItem) => {
            promises.push(cityController.addCity(cityItem));
        });
        return Promise.all(promises);
    },
    initNotifications: function initNotifications() {
        let promises;

        promises = [];
        notificationsInitialCollection.forEach((notificationItem) => {
            promises.push(notificationsController.addNotification(notificationItem));
        });
        return Promise.all(promises);
    },
    initEngineCapacites: function initEngineCapacites() {
        let promises;

        promises = [];
        enginecapacitesInitialCollection.forEach((enginecapacity) => {
            promises.push(carController.addEngineCapacity(enginecapacity));
        });
        return Promise.all(promises);
    },
    initEngineTypes: function initEngineTypes() {
        let promises;

        promises = [];
        enginetypesInitialCollection.forEach((enginetypes) => {
            promises.push(carController.addEngineType(enginetypes));
        });
        return Promise.all(promises);
    },
    initGearBoxes: function initGearBoxes() {
        let promises;

        promises = [];
        gearboxesInitialCollection.forEach((gearboxes) => {
            promises.push(carController.addGearbox(gearboxes));
        });
        return Promise.all(promises);
    },
};
