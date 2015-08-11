import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line
import layout from '../templates/components/display-component';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['display-component'],
  componentName: null,
  displayEmpty: false,
  _attrs: computed({
    get() {
      const attrs = Object.keys(this.get('attrs'));
      const attributes = attrs.filter(item => {
        return new Set(['__ember_meta__', 'as', 'componentName']).has(item) ? false : true;
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
      const value = this.get(item);
      const type = typeOf(value);
      const quoteMark = type === 'string' ? '\'' : '';
      const display = !this.get('displayEmpty') && isEmpty(value) ? false : true;
      return {prop: item, value: value, type: type, quoteMark: quoteMark, display: display};
    }));
  },
  as: null,
  _propertyObservers: []

});
