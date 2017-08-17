/*eslint strict:0  */
var Spare, spareInitialCollection;

Spare = require('../models/spare');

spareInitialCollection = [{
    name: 'Кузов'
}, {
    name: 'Двигатель'
}, {
    name: 'Фильтры'
}, {
    name: 'Ременный привод'
}, {
    name: 'Система подачи топлива'
}, {
    name: 'Система выпуска'
}, {
    name: 'Система охлаждения'
}, {
    name: 'Система сцепления'
}, {
    name: 'Коробка передач'
}, {
    name: 'Тормозная система'
}, {
    name: 'Подвеска/амортизация'
}, {
    name: 'Рулевое управление'
}, {
    name: 'Отопление/вентиляция/кондиционер'
}, {
    name: 'Система очистки окон'
}, {
    name: 'Элементы салона'
}, {
    name: 'Диски/шины'
}, {
    name: 'Стёкла'
}, {
    name: 'Масла и другие тех. жидкости'
}];

function saveSpare(spare) {
    var spareModel;

    spareModel = new Spare({
        name: spare.name
    });

    return spareModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(spare.name + ' is loaded.');
        }
    });
}

module.exports = {
    init: function init() {
        spareInitialCollection.forEach(function each(cityItem) {
            saveSpare(cityItem);
        });
    },
    getSpares: function getSpares(filter) {
        return Spare.find(filter).exec();
    },
    addSpare: function addSpare(spare) {
        return saveSpare(spare);
    },
    deleteSpare: function deleteSpare(name) {
        return Spare.findOne({
                name: name
            }).exec()
            .then(function foundSpare(spare) {
                return spare.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + spare.id);
                    }
                });
            });
    },
    getSpare: function getCity(spare) {
        return Spare.findOne({
            name: spare
        }).exec();
    },
    updateSpare: function updateSpare(spare) {
		return Spare.findById({
			_id: spare.id
		}).exec()
			.then(function foundCar(gotSpare) {
				gotSpare.name = spare.name;

				return gotSpare.save()
					.then(function success(save) {
						console.log(save.type + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	}
};