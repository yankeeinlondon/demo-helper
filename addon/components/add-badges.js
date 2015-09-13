import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line

import layout from '../templates/components/add-badges';

export default Ember.Component.extend({
  layout: layout,
  repo: computed.alias('name'),
  title: computed.alias('name'),
  repoOwner: 'lifegadget'
});
