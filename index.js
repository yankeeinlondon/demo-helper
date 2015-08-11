/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-helper',
  included: function(app) {
    app.import('vendor/demo-helper/demo-helper.css');
  }
};
