import { js } from '../../../helpers/js';
import { module, test } from 'qunit';

module('Unit | Helper | js');

// Replace this with your real tests.
test('it works', function(assert) {
  let testFunc = function() { return null; };
  let result = js([testFunc]);
  assert.ok(result);
});
