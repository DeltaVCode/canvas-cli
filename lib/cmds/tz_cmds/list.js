'use strict';

const moment = require('moment-timezone');

exports.command = 'list [filter]';
exports.desc = 'List available time zones';
exports.handler = (argv) => {
  var filter = new RegExp(escapeRegExp(argv.filter), 'i');
  moment.tz.names()
    .filter(name => filter.test(name))
    .forEach(name => console.log(name));
};

// https://stackoverflow.com/a/6969486
function escapeRegExp(str) {
  return str ? str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : '.*';
}