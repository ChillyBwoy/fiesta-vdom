import tplTodos = require('../templates/demo');
import { createVDOM } from '../../../../dist/vdom/element';

document.addEventListener('DOMContentLoaded', () => {
  const $root = document.getElementById('root');
  const vdom = createVDOM($root, tplTodos);

  let state = {
    hello: 'OH, HAI!',
    previewEach: {
      foo: 'bar',
      key: 'value'
    },
    previewFor: [
      'xml',
      'json',
      'yaml',
      'bson'
    ],
    previewIf: true
  };
  vdom.update(state);
});
