import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line

import layout from '../templates/components/html-tag';

export default Ember.Component.extend({
  layout: layout,
  tag: 'tag',
  _indent: computed.alias('indent'),
  _indentSpacing: computed('_indent', function() {
    const indent = this.get('_indent');
    let indentText =[];
    let index = 1;
    while (indentText.length < indent) {
      indentText.push(`<span class="indent indent-${index}">&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
      index++;
    }
    return Ember.String.htmlSafe(indentText.join(''));
  }),

});
