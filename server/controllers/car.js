/*eslint strict:0  */
var Car, EngineCapacity, EngineType, Gearbox, SpareType;

EngineType = require('../models/engineType');
EngineCapacity = require('../models/engineCapacity');
Gearbox = require('../models/gearbox');
Car = require('../models/car');
SpareType = require('../models/spareType');

function saveSpareType(spareType) {
    var spareModel;

    spareModel = new SpareType({
        name: spareType.name
    });

    return spareModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(spareType.name + ' is loaded.');
        }
    });
}

function saveEngineType(engineType) {
    var engineTypeModel;

    engineTypeModel = new EngineType({
        name: engineType.name
    });

    return engineTypeModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(engineType.name + ' is loaded.');
        }
    });
}

function saveEngineCapacity(engineCapacity) {
    var engineCapacityModel;

    engineCapacityModel = new EngineCapacity({
        name: engineCapacity.name
    });

    return engineCapacityModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(engineCapacity.name + ' is loaded.');
        }
    });
}

function saveGearbox(gearbox) {
    var gearboxModel;

    gearboxModel = new Gearbox({
        name: gearbox.name
    });

    return gearboxModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(gearbox.name + ' is loaded.');
        }
	});
}

function saveCar(car) {
	var carModel;

	carModel = new Car({
		mark: car.mark,
		model: car.model,
		from: car.from || 2000,
		end: car.end
	});

	return carModel.save(function save(err) {
		if (err) {
			console.log(err);
		} else {
			console.log(car.mark + ' ' + car.model + ' is loaded.');
		}
	});
}

module.exports = {
	addMark: function addNewCar(carItem) {
		return saveCar(carItem);
	},
	updateModel: function updateModel(car) {
		return Car.findById({
				_id: car.id
			}).exec()
			.then(function foundCar(carModel) {
				carModel.model = car.model;
				carModel.from = car.from;
				carModel.end = car.end;

				return carModel.save()
					.then(function success(savedModel) {
						console.log(savedModel.mark + ' ' + savedModel.model + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	},
	updateMark: function updateMark(car) {
		return Car.find({
				mark: car.oldMark
			}).exec()
			.then(function foundCar(carModels) {
				var i, promises;

				promises = [];
				for (i = 0; i < carModels.length; i += 1) {
					carModels[i].mark = car.newMark;
					promises.push(carModels[i].save());
				}
				return Promise.all(promises);
			});
	},
	deleteMark: function deleteMark(mark) {
		return Car.find({
				mark: mark
			}).exec()
			.then(function deleteMark(marks) {
				var i, promises;

				promises = [];
				for (i = 0; i < marks.length; i += 1) {
					promises.push(marks[i].remove());
				}
				return Promise.all(promises);
			});
	},
	deleteModel: function deleteModel(id) {
		return Car.findById({
				_id: id
			}).exec()
			.then(function delCar(dcar) {
				return dcar.remove(function success(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('DELETE removing ID: ' + dcar.id);
					}
				});
			});
	},
	getCars: function getCars(filter) {
		return Car.find(filter).exec();
	},
	getAllMarks: function getAllMarks() {
		return Car.find({}).distinct('mark').exec();
	},
	getMark: function getMark(mark) {
		return Car.find({
				mark: mark
			}).exec()
			.then(function gotModels(models) {
				return {
					mark: mark,
					models: models
				};
			});
	},
	getModel: function getModel(mark, model) {
		return Car.findOne({
			mark: mark,
			model: model
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
            _id: id
        }).exec()
            .then(function foundEngineType(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getEngineType: function getEngine(name) {
        return EngineType.findOne({
            name: name
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
            _id: id
        }).exec()
            .then(function foundEngineCapacity(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getEngineCapacity: function getEngineCapacity(name) {
        return EngineCapacity.findOne({
            name: name
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
            _id: id
        }).exec()
            .then(function foundGearbox(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getGearbox: function getGearbox(name) {
        return Gearbox.findOne({
            name: name
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
                _id: id
            }).exec()
            .then(function foundSpare(spareType) {
                return spareType.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + spareType.id);
                    }
                });
            });
    },
    getSpareType: function getSpareType(spareType) {
        return SpareType.findOne({
            name: spareType
        }).exec();
    },
    updateSpareType: function updateSpareType(spareType) {
		return SpareType.findById({
			_id: spareType.id
		}).exec()
			.then(function foundCar(gotSpare) {
				gotSpare.name = spareType.name;

				return gotSpare.save()
					.then(function success(save) {
						console.log(save.type + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	}
};