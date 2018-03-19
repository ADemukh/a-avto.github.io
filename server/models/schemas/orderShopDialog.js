var MessageSchema, OrderShopDialogSchema, moment, mongoose;

mongoose = require('mongoose');
MessageSchema = require('./message');
moment = require('../../moment');

OrderShopDialogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [MessageSchema],
  created: {
    type: String,
    default: moment().format(moment.DATE_TIME_FORMAT)
  }
});

module.exports = OrderShopDialogSchema;