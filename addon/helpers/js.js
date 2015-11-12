import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export function js(params) {
  const f = this.get(params[0]);
  return typeOf(f) === 'function' ? f.toString() : '';
}

export default Ember.Helper.helper(js);
