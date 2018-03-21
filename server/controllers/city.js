/* eslint strict:0  */
let City;

City = require('../models/city');

function saveCity(city) {
    let cityModel;

    cityModel = new City({
        name: city.name,
    });

    return cityModel.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`${city.name} is loaded.`);
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
            _id: id,
        }).exec()
            .then(city => city.remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`DELETE removing ID: ${city.id}`);
                }
            }));
    },
    getCity: function getCity(name) {
        return City.findOne({
            name,
        }).exec();
    },
    updateCity: function updateCity(city) {
        return City.findById({
            _id: city.id,
        }).exec()
            .then((gotCity) => {
                gotCity.name = city.name;

                return gotCity.save()
                    .then((save) => {
                        console.log(`${save.type} is loaded.`);
                    }, (err) => {
                        console.log(err);
                    });
            });
    },
};
