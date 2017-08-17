/*eslint strict:0  */
var City, cityInitialCollection;

City = require('../models/city');

cityInitialCollection = [{
    name: 'Минск'
}, {
    name: 'Гомель'
}, {
    name: 'Могилёв'
}, {
    name: 'Витебск'
}, {
    name: 'Гродно'
}, {
    name: 'Брест'
}, {
    name: 'Бобруйск'
}, {
    name: 'Барановичи'
}, {
    name: 'Борисов'
}, {
    name: 'Пинск'
}, {
    name: 'Орша'
}, {
    name: 'Мозырь'
}, {
    name: 'Солигорск'
}, {
    name: 'Новополоцк'
}, {
    name: 'Лида'
}, {
    name: 'Молодечно'
}, {
    name: 'Полоцк'
}, {
    name: 'Жлобин'
}, {
    name: 'Светлогорск'
}, {
    name: 'Речица'
}];

function saveCity(city) {
    var cityModel;

    cityModel = new City({
        name: city.name
    });

    return cityModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(city.name + ' is loaded.');
        }
    });
}

module.exports = {
    init: function init() {
        cityInitialCollection.forEach(function each(cityItem) {
            saveCity(cityItem);
        });
    },
    getCities: function getCities(filter) {
        return City.find(filter).exec();
    },
    addCity: function addCity(city) {
        return saveCity(city);
    },
    deleteCity: function deleteCity(name) {
        return City.findOne({
                name: name
            }).exec()
            .then(function foundCity(city) {
                return city.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + city.id);
                    }
                });
            });
    },
    getCity: function getCity(city) {
        return City.findOne({
            name: city
        }).exec();
    },
    updateCity: function updateCity(city) {
		return City.findById({
			_id: city.id
		}).exec()
			.then(function foundCar(gotCity) {
				gotCity.name = city.name;

				return gotCity.save()
					.then(function success(save) {
						console.log(save.type + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	}
};