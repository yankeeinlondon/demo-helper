import Ember from 'ember';
import layout from '../templates/components/app-page';

const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observe, $, run, on, typeOf } = Ember;  // jshint ignore:line
const { get, set, debug } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line


export default Ember.Component.extend({
  layout: layout,
  navigator: service(),

  classNames: ['app-page'],
  isIndexPage: computed.alias('navigator.isIndexRoute'),
  currentRoute: computed.alias('navigator.currentRouteName'),
  notIndexPage: Ember.computed.not('isIndexPage'),
  description: Ember.computed.alias('subHeading'),
  desc: Ember.computed.alias('subHeading')
});
