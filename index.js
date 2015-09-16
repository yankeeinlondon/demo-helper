/* jshint node: true */
'use strict';

module.exports = {
  name: 'demo-helper',
  included: function(app) {
    app.import('vendor/demo-helper/demo-helper.css');
    app.import('vendor/ui-list/ui-list.css');
    app.import('vendor/ui-list/ui-list-sorting.css');
    app.import('vendor/ui-list/ui-list-plus.css');
    app.import('vendor/ui-list/ui-list-flat.css');
    app.import('vendor/ui-list/ui-list-simple.css');
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
