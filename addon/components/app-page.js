import Ember from 'ember';
import layout from '../templates/components/app-page';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['app-page'],
  isIndexPage: Ember.computed.equal('currentPath', 'index'),
  notIndexPage: Ember.computed.not('isIndexPage')
});
