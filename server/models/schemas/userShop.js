let UserShopSchema,
    mongoose;

mongoose = require('mongoose');

UserShopSchema = new mongoose.Schema({
    www: String,
    address: String,
    about: String,
    longitude: String,
    latitude: String,
    cities: [String],
    spareTypes: [String],
    carMarks: [String],
    spare: {
        isNew: Boolean,
        isOld: Boolean,
    },
    schedule: {
        sunday: {
            active: Boolean,
            from: String,
            to: String,
        },
        saturday: {
            active: Boolean,
            from: String,
            to: String,
        },
        friday: {
            active: Boolean,
            from: String,
            to: String,
        },
        thursday: {
            active: Boolean,
            from: String,
            to: String,
        },
        wednesday: {
            active: Boolean,
            from: String,
            to: String,
        },
        tuesday: {
            active: Boolean,
            from: String,
            to: String,
        },
        monday: {
            active: Boolean,
            from: String,
            to: String,
        },
    },
}, {
    discriminatorKey: 'role',
});

module.exports = UserShopSchema;
