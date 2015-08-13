import Ember from 'ember';
const htmlSafe = Ember.String.htmlSafe;
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line
import layout from '../templates/components/display-component';
const ignoredProperties = ['_indent','__ember_meta__', 'as', 'componentName','_dim','_container'];

export default Ember.Component.extend({
  layout: layout,
  classNames: ['display-component'],
  classNameBindings: ['_dim:dim:normal'],
  componentName: null,
  displayEmpty: false,
  _hasContainer: computed(function(){
    return this.get('_container') ? true : false;
  }),
  _indent: 0,
  _indentSpacing: computed('_indent', function() {
    const indent = this.get('_indent');
    let indentText =[];
    let index = 1;
    while (indentText.length < indent) {
      indentText.push(`<span class="indent indent-${index}">&nbsp;&nbsp;&nbsp;&nbsp;</span>`);
      index++;
    }
    return htmlSafe(indentText.join(''));
  }),
  _hasVisibleProperties: computed('_attrs','propertyMutex', function(){
    return this.get('_props').filter(item => {
      return item.type !== 'undefined';
    }).length > 0;
  }),
  _attrs: computed({
    get() {
      const attrs = Object.keys(this.get('attrs'));
      const attributes = attrs.filter(item => {
        return new Set(ignoredProperties).has(item) ? false : true;
      });
      // add observers to each
      attributes.map(item => {
        this.addObserver(item, () => {
          this.notifyPropertyChange('propertyMutex');
        });
      });

      return attributes;
    }
  }),
  _props: computed('propertyMutex',{
    get() {
      return this.getProps();
    }
  }),
  getProps() {
    const attributes = this.get('_attrs');
    return new A(attributes.map(item => {
      let value = this.get(item);
      let type = typeOf(value);
      if(type === 'string' && value.substr(0,1) === ':') {
        value = value.substr(1);
        type = 'bound-variable';
      }
      const quoteMark = type === 'string' ? '\'' : '';
      const display = !this.get('displayEmpty') && isEmpty(value) ? false : true;
      return {prop: item, value: value, type: type, quoteMark: quoteMark, display: display};
    }));
  },
  as: null,
  _propertyObservers: []

});
