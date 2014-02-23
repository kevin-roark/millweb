#!/usr/local/bin/node

module.exports = exports = makeProject;

var fs = require('fs');

function makeProject() {
  var args = process.argv.slice(2);
  if (!args.length) {
    console.log('usage: millweb <project_name>');
    return;
  }
  console.log('initializing ur project');

  var project_name = args[0];
  var pdir = './' + project_name;
  fs.mkdirSync(pdir);

}

if (!module.parent) { /* being run as command line */
  makeProject();
}

