import tplTodos = require('../templates/todos');
import { createVDOM } from '../../../../dist/vdom/element';

document.addEventListener('DOMContentLoaded', () => {
  const $root = document.getElementById('root');
  const vdom = createVDOM($root, tplTodos);

  let state = {
    label: 'Initial state',
    newTodo: '',
    todos: []
  };

  vdom.update(state);
  let lastId = 0;

  setInterval(() => {
    state.todos = [{
      id: ++lastId,
      text: Math.random()
    }].concat(state.todos)
    vdom.update(state);
  }, 5000);
});
