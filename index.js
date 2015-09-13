/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-helper',
  included: function(app) {
    app.import('vendor/demo-helper/demo-helper.css');
  },
  contentFor: function(type, config) {
    switch(type) {
      case 'head':
        console.log('config object: %o', config);
        return '<link href="/vendor/demo-helper/emberjs.png" rel="icon" type="image/png" />';

      default:
        return '';
    }
  }
};
