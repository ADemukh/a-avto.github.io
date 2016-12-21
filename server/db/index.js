var mongoose = require('mongoose');
var options = { server: { connectTimeoutMS: 10000 } };
// var connectionsstring = require('./nconf').connectionstring;
var db = mongoose.connect('mongodb://aavto_admin:aavto_admin@ds141098.mlab.com:41098/a_avto_dev', options);
module.exports = db;