var CitySchema, mongoose;

mongoose = require('mongoose');
CitySchema = require('./schemas/city');

module.exports = mongoose.model('City', CitySchema);