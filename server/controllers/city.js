/*eslint strict:0  */
var City;

City = require('../models/city');

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
    getCities: function getCities(filter) {
        return City.find(filter).exec();
    },
    addCity: function addCity(city) {
        return saveCity(city);
    },
    deleteCity: function deleteCity(id) {
        return City.findOne({
                _id: id
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
    getCity: function getCity(name) {
        return City.findOne({
            name: name
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