const app = require('express')();

require('./start/log')();
require('./start/db')();
require('./start/routes')(app);

module.exports = app;
