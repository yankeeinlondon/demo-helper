import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export function js(params) {
  const f = params[0];
  const pre = '<pre><code class="language-js">';
  const post = '</code></pre>';
  return typeOf(f) === 'function' ? Ember.String.htmlSafe(pre + f.toString() + post) : '';
}

export default Ember.Helper.helper(js);
