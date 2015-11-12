import Ember from 'ember';

export function json(params) {
  const json = JSON.stringify(params[0], null, 2);
  const pre = '<pre><code class="language-js">';
  const post = '</code></pre>';
  return Ember.String.htmlSafe(`${pre}${json}${post}`);
}

export default Ember.Helper.helper(json);
