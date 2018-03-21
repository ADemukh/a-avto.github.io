/* eslint strict:0  */
let TokenSchema,
    UserSchema,
    bcrypt,
    config,
    mongoose;

mongoose = require('mongoose');
bcrypt = require('bcryptjs');
config = require('../../config');
TokenSchema = require('./token');

UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: String,
    phone: String,
    notifications: [String],
    changesFrom: {
        type: Date,
        default: Date.now,
    },
    photo: {
        fileName: String,
        url: String,
        thumbUrl: String,
    },
    tokens: [TokenSchema],
}, {
    discriminatorKey: 'role',
});

UserSchema.methods.generateHash = function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(config.bcrypt.salt));
};

UserSchema.methods.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = UserSchema;
