/*jshint node:true*/
const RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    const npm = this.addPackagesToProject([
      {name: "twokul/ember-lazy-image"},
      {name: 'chalk', target: '*'},
      {name: 'ui-markdown', target: '*'},
      {name: 'ui-image', target: '*'},
      {name: 'ui-navigator-service', target: '*'},
    ]);
    const bower = this.addBowerPackagesToProject([
      {name: 'prism', target: '*'},
      {name: 'showdown', target: '*'},
      {name: 'fontawesome', target: '*'},
    ]);
    // const addons = this.addAddonsToProject([
    //   {name: 'ui-bootstrap-plus', target: '^0.0.5'},
    //   {name: 'ui-navigator-service', target: '^0.3.1'},
    // ]);

    return RSVP.Promise.all([
      this.addAddonToProject('ui-bootstrap-plus'),
      // this.addAddonToProject('ui-navigator-service'),
      // addons,
      npm,
      bower
    ]);
  }
};
