#!/usr/bin/env node
'use strict';

const { join } = require('path');
const yargs = require('yargs');

yargs
  .commandDir(join(__dirname, 'lib', 'cmds'))
  .demandCommand()
  .help()
  .argv;
