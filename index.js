/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-helper',

  included(app, parentAddon) {
    const target = (parentAddon || app);
    this._super.included(target);
    target.import('vendor/demo-helper/demo-helper.css');
    target.import('bower_components/prism/themes/prism.css');
    target.import('bower_components/prism/prism.js');
    target.import('bower_components/prism/components/prism-handlebars.js');
    target.import('bower_components/prism/components/prism-javascript.js');
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
  }
};
