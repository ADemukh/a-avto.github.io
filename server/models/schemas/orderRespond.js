var MessageSchema, OrderRespondSchema, mongoose;

mongoose = require('mongoose');
MessageSchema = require('./message');

OrderRespondSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    shopID: {
        type: String,
        required: true
    },
    messages: [MessageSchema],
    created: Date
});

module.exports = OrderRespondSchema;