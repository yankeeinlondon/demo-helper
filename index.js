/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-helper',
  included: function(app) {
    app.import('vendor/demo-helper/demo-helper.css');
    app.import(app.bowerDirectory + '/prism/themes/prism.css');
  },
  contentFor: function(type, config) {
    switch(type) {
      case 'head':
        return '<link href="/demo-helper/emberjs.png" rel="icon" type="image/png" />';
      default:
        return '';
    }
  }
};
