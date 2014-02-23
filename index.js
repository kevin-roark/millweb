#!/usr/local/bin/node

module.exports = exports = makeProject;

var fs = require('fs');
var ncp = require('ncp').ncp;

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

  ncp.limit = 16;
  ncp('boiler', pdir, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('made ur structure!!');
  });

}

if (!module.parent) { /* being run as command line */
  makeProject();
}

