import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/add-page-header';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['title-block'],
  repo: computed.alias('name'),
  _npm: computed('name', function() {
    const {npm,name} = this.getProperties('npm','name');
    return npm ? npm : name;
  }),
  title: computed.alias('name'),
  repoOwner: 'lifegadget'
});
