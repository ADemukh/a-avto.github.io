let UserClientCarSchema,
    mongoose;

mongoose = require('mongoose');

UserClientCarSchema = new mongoose.Schema({
    mark: String,
    model: String,
    year: Number,
    VIN: String,
    engineType: String,
    engineCapacity: String,
    gearbox: String,
}, {
    discriminatorKey: 'role',
});

module.exports = UserClientCarSchema;
