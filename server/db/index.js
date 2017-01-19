var db, mongoose, options;

mongoose = require('mongoose');
options = { server: { connectTimeoutMS: 10000 } };
db = mongoose.connect('mongodb://aavto_admin:aavto_admin@ds141098.mlab.com:41098/a_avto_dev', options);

module.exports = db;