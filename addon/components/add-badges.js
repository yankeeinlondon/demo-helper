import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/add-badges';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  
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
    const {_npm} = this.getProperties( '_npm');
    return `https://badge.fury.io/js/${_npm}.svg`;
  }),
  codeClimateSource: computed('repo', function() {
    const {repoOwner,repo} = this.getProperties('repoOwner', 'repo');
    return `https://codeclimate.com/github/${repoOwner}/${repo}/badges/gpa.svg`;
  })
});
