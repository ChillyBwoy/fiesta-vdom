import tplTodos = require('../templates/demo');
import { createVDOM } from '../../../../dist/vdom/element';

document.addEventListener('DOMContentLoaded', () => {
  const $root = document.getElementById('root');
  const vdom = createVDOM($root, tplTodos);

  vdom.update({

  });
});
