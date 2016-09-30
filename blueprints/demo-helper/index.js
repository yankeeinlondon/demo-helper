/*jshint node:true*/
const RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {

  },

  afterInstall: function() {
    const npm = this.addPackagesToProject([
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
    this.ui.writeLine('demo-helper installed, now adding ui-bootstrap-plus addon');

    return RSVP.Promise.all([
      this.addAddonToProject('ui-bootstrap-plus'),
      npm,
      bower
    ]);
  }
};
