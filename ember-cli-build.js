/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    babel: { includePolyfill: true }
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/js/tooltip.js');
  app.import('bower_components/fontawesome/css/font-awesome.css');

  return app.toTree();
};
