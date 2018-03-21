let UserClientCarSchema,
    UserClientSchema,
    mongoose;

mongoose = require('mongoose');
UserClientCarSchema = require('./userClientCar');

UserClientSchema = new mongoose.Schema({
    cars: [UserClientCarSchema],
    city: String,
    vk: {
        id: String,
        profileUrl: String,
    },
    fb: {
        id: String,
        profileUrl: String,
    },
    g: {},
}, {
    discriminatorKey: 'role',
});

module.exports = UserClientSchema;
