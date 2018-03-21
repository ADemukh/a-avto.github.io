const carsInitialCollection = require('../init/cars');
const spareInitialCollection = require('../init/spareTypes');
const gearboxesInitialCollection = require('../init/gearboxes');
const enginetypesInitialCollection = require('../init/engineTypes');
const enginecapacitesInitialCollection = require('../init/engineCapacities');
const cityInitialCollection = require('../init/cities');
const notificationsInitialCollection = require('../init/notifications');
const carController = require('../controllers/car');
const cityController = require('../controllers/city');
const notificationsController = require('../controllers/notifications');

module.exports = {
    initSpareTypes: function initSpareTypes() {
        const promises = [];
        spareInitialCollection.forEach((spareItem) => {
            promises.push(carController.addSpare(spareItem));
        });
        return Promise.all(promises);
    },
    initCars: function initCars() {
        const promises = [];
        carsInitialCollection.forEach((carItem) => {
            promises.push(carController.addMark(carItem));
        });
        return Promise.all(promises);
    },
    initCities: function initCities() {
        const promises = [];
        cityInitialCollection.forEach((cityItem) => {
            promises.push(cityController.addCity(cityItem));
        });
        return Promise.all(promises);
    },
    initNotifications: function initNotifications() {
        const promises = [];
        notificationsInitialCollection.forEach((notificationItem) => {
            promises.push(notificationsController.addNotification(notificationItem));
        });
        return Promise.all(promises);
    },
    initEngineCapacites: function initEngineCapacites() {
        const promises = [];
        enginecapacitesInitialCollection.forEach((enginecapacity) => {
            promises.push(carController.addEngineCapacity(enginecapacity));
        });
        return Promise.all(promises);
    },
    initEngineTypes: function initEngineTypes() {
        const promises = [];
        enginetypesInitialCollection.forEach((enginetypes) => {
            promises.push(carController.addEngineType(enginetypes));
        });
        return Promise.all(promises);
    },
    initGearBoxes: function initGearBoxes() {
        const promises = [];
        gearboxesInitialCollection.forEach((gearboxes) => {
            promises.push(carController.addGearbox(gearboxes));
        });
        return Promise.all(promises);
    },
};
