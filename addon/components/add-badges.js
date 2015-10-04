import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line

import layout from '../templates/components/add-badges';

export default Ember.Component.extend({
  layout: layout,
  repo: computed.alias('name'),
  title: computed.alias('name'),
  repoOwner: 'lifegadget',
  _npm: computed('npm','repo', {
    set(_,value) {
      return value;
    },
    get() {
      const {npm,repo} = this.getProperties('npm','repo');
      return npm ? npm : repo;
    }
  }),
  travisSource: computed('repo', function(){
    const {repoOwner,repo} = this.getProperties('repoOwner', 'repo');
    return `https://travis-ci.org/${repoOwner}/${repo}.svg`;
  }),
  npmSource: computed('_npm', function() {
    const {repoOwner,_npm} = this.getProperties('repoOwner', '_npm');
    return `https://badge.fury.io/js/${_npm}.svg`;
  }),
  codeClimateSource: computed('repo', function() {
    const {repoOwner,repo} = this.getProperties('repoOwner', 'repo');
    return `https://codeclimate.com/github/${repoOwner}/${repo}/badges/gpa.svg`;
  })
});
