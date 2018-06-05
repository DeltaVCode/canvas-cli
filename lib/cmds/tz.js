'use strict';

exports.command = 'tz <command>';
exports.desc = 'Shift course time zone',
exports.builder = (yargs) => yargs
    .commandDir('tz_cmds')
    ;
exports.handler = (argv) => {
    console.log('tz', argv);
};