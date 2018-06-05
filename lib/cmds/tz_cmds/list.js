'use strict';

const moment = require('moment-timezone');

exports.command = 'list';
exports.desc = 'List available time zones';
exports.handler = (argv) => {
  moment.tz.names()
    .forEach(name => console.log(name));
};