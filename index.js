/* jshint node: true */
'use strict';
var chalk = require('chalk');

module.exports = {
  name: 'demo-helper',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    app.import('vendor/demo-helper/demo-helper.css');
    target.import(target.bowerDirectory + '/prism/themes/prism.css');
    target.import(target.bowerDirectory + '/prism/prism.js');
  },
  contentFor: function(type) {
    switch(type) {
      case 'head':
        return '<link href="/demo-helper/images/emberjs-icon.png" rel="icon" type="image/png" />';
      default:
        return '';
    }
  },
  afterInstall: function() {
    this.ui.writeLine('Demo Helper installed!');
    this.ui.writeLine();
    this.ui.writeLine('use ' + chalk.bold('app-page') + ' in your application.hbs dummy app.');
  }
};
