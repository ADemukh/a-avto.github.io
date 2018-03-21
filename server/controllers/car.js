const EngineType = require('../models/engineType');
const EngineCapacity = require('../models/engineCapacity');
const Gearbox = require('../models/gearbox');
const Car = require('../models/car');
const SpareType = require('../models/spareType');

function saveSpareType(spareType) {
    const spareModel = new SpareType({
        name: spareType.name,
    });

    return spareModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${spareType.name} is loaded.`);
        }
    });
}

function saveEngineType(engineType) {
    const engineTypeModel = new EngineType({
        name: engineType.name,
    });

    return engineTypeModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${engineType.name} is loaded.`);
        }
    });
}

function saveEngineCapacity(engineCapacity) {
    const engineCapacityModel = new EngineCapacity({
        name: engineCapacity.name,
    });

    return engineCapacityModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${engineCapacity.name} is loaded.`);
        }
    });
}

function saveGearbox(gearbox) {
    const gearboxModel = new Gearbox({
        name: gearbox.name,
    });

    return gearboxModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${gearbox.name} is loaded.`);
        }
    });
}

function saveCar(car) {
    const carModel = new Car({
        mark: car.mark,
        model: car.model,
        from: car.from || 2000,
        end: car.end,
    });

    return carModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${car.mark} ${car.model} is loaded.`);
        }
    });
}

module.exports = {
    addMark: function addNewCar(carItem) {
        return saveCar(carItem);
    },
    updateModel: function updateModel(car) {
        return Car.findById({
            _id: car.id,
        }).exec()
            .then((carModel) => {
                carModel.model = car.model;
                carModel.from = car.from;
                carModel.end = car.end;

                return carModel.save()
                    .then((savedModel) => {
                        console.log(`${savedModel.mark} ${savedModel.model} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
    updateMark: function updateMark(car) {
        return Car.find({
            mark: car.oldMark,
        }).exec()
            .then((carModels) => {
                const promises = [];
                for (let i = 0; i < carModels.length; i += 1) {
                    carModels[i].mark = car.newMark;
                    promises.push(carModels[i].save());
                }
                return Promise.all(promises);
            });
    },
    deleteMark: function deleteMark(mark) {
        return Car.find({
            mark,
        }).exec()
            .then((marks) => {
                const promises = [];
                for (let i = 0; i < marks.length; i += 1) {
                    promises.push(marks[i].remove());
                }
                return Promise.all(promises);
            });
    },
    deleteModel: function deleteModel(id) {
        return Car.findById({
            _id: id,
        }).exec()
            .then(dcar => dcar.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${dcar.id}`);
                }
            }));
    },
    getCars: function getCars(filter) {
        return Car.find(filter).exec();
    },
    getAllMarks: function getAllMarks() {
        return Car.find({}).distinct('mark').exec();
    },
    getMark: function getMark(mark) {
        return Car.find({
            mark,
        }).exec()
            .then(models => ({
                mark,
                models,
            }));
    },
    getModel: function getModel(mark, model) {
        return Car.findOne({
            mark,
            model,
        }).exec();
    },

    addEngineType: function addNewEngineType(engineType) {
        return saveEngineType(engineType);
    },
    getEngineTypes: function getEngineType(filter) {
        return EngineType.find(filter).exec();
    },
    deleteEngineType: function deleteEngineType(id) {
        return EngineType.findOne({
            _id: id,
        }).exec()
            .then(e => e.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${e.id}`);
                }
            }));
    },
    getEngineType: function getEngine(name) {
        return EngineType.findOne({
            name,
        }).exec();
    },

    addEngineCapacity: function addNewEngineCapacity(engineCapacity) {
        return saveEngineCapacity(engineCapacity);
    },
    getEngineCapacities: function getEngineCapacity(filter) {
        return EngineCapacity.find(filter).exec();
    },
    deleteEngineCapacity: function deleteEngineCapacity(id) {
        return EngineCapacity.findOne({
            _id: id,
        }).exec()
            .then(e => e.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${e.id}`);
                }
            }));
    },
    getEngineCapacity: function getEngineCapacity(name) {
        return EngineCapacity.findOne({
            name,
        }).exec();
    },

    addGearbox: function addNewGearbox(gearbox) {
        return saveGearbox(gearbox);
    },
    getGearboxes: function getGearbox(filter) {
        return Gearbox.find(filter).exec();
    },
    deleteGearbox: function deleteGearbox(id) {
        return Gearbox.findOne({
            _id: id,
        }).exec()
            .then(e => e.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${e.id}`);
                }
            }));
    },
    getGearbox: function getGearbox(name) {
        return Gearbox.findOne({
            name,
        }).exec();
    },

    getSpareTypes: function getSpareTypes(filter) {
        return SpareType.find(filter).exec();
    },
    addSpareType: function addSpareType(spareType) {
        return saveSpareType(spareType);
    },
    deleteSpareType: function deleteSpareType(id) {
        return SpareType.findOne({
            _id: id,
        }).exec()
            .then(spareType => spareType.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${spareType.id}`);
                }
            }));
    },
    getSpareType: function getSpareType(spareType) {
        return SpareType.findOne({
            name: spareType,
        }).exec();
    },
    updateSpareType: function updateSpareType(spareType) {
        return SpareType.findById({
            _id: spareType.id,
        }).exec()
            .then((gotSpare) => {
                gotSpare.name = spareType.name;

                return gotSpare.save()
                    .then((save) => {
                        console.log(`${save.type} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
};
