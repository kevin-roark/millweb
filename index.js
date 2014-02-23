#!/usr/local/bin/node

module.exports = exports = makeProject;

var fs = require('fs');
var ncp = require('ncp').ncp;

function makeProject() {
  console.log('initializing ur project');

  ncp.limit = 16;
  ncp(__dirname + '/boiler', './', function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('made ur structure!!');
  });

}

if (!module.parent) { /* being run as command line */
  makeProject();
}

