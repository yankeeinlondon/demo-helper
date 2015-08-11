import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-component', 'Integration | Component | display-component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{display-component}}`);

  assert.equal(this.$().text().trim().substr(0,2), '{{');
  assert.equal(this.$().text().trim().substr(-2), '}}');

});


test('component name is displayed', function(assert) {
  assert.expect(1);

  this.render(hbs`{{display-component componentName='foobar'}}`);

  assert.equal(this.$('.name').text(), 'foobar');
});

test('property name/value pairs are displayed', function(assert) {
  assert.expect(1);

  this.render(hbs`{{display-component
    componentName='foobar'
    foo='foey'
    bar='barred'
    as='foobar'
  }}`);

  const $props = this.$('span.properties > span');
  assert.equal( $props.length, 2, 'There should be two properties; "componentName" and "as" are ignored' );
});
