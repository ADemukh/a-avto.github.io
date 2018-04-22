const mongoose = require('mongoose');
const moment = require('../../moment');

const OrderShopDialogSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    created: {
        type: String,
        default: moment().format(moment.DATE_TIME_FORMAT),
    },
});

module.exports = OrderShopDialogSchema;
