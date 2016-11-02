import tplTodos = require('../templates/todos');
import { createVDOM } from '../../../../dist/vdom/element';

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    label: 'Initial state',
    newTodo: '',
    todos: []
  };
  
  const $root = document.getElementById('root');
  const vdom = createVDOM($root, tplTodos);
  vdom.update(state);
});
