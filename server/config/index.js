module.exports = process.env.NODE_ENV === 'production' ?
    require('./production.config') :
    require('./development.config');
