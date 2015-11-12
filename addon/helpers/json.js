import Ember from 'ember';

export function json(params) {
  const j = JSON.stringify(params[0], null, 2);
  const pre = '<pre><code class="language-js">';
  const post = '</code></pre>';
  return Ember.String.htmlSafe(`${pre}${j}${post}`);
}

export default Ember.Helper.helper(json);
