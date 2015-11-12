import Ember from 'ember';

export default Ember.Controller.extend({

  isRepressed: false,
  toggledEnablement: false,
  isIndexPage: Ember.computed.equal('currentPath', 'index'),
  notIndexPage: Ember.computed.not('isIndexPage'),
  props: 'props',
  test: 'orange',
  myFunction(context) {
    console.log('what is life without context: %o', context);
  },
  myJson: [
    {id: 1, text: 'one thing'},
    {id: 2, text: 'leads to another'}
  ],

  actions: {
    toggleRepression: function() {
      console.log('toggling');
      this.toggleProperty('isRepressed');
    },
    toggleEnablement: function() {
      console.log('toggling');
      this.toggleProperty('toggledEnablement');
    }
  }

});
