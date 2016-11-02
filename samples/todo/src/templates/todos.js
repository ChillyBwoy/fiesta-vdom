module.exports = function(ast$f1b74ddc) {
  return function(json) {
    return [ast$f1b74ddc('div', {
      "data-id": "todos"
    }, [ast$f1b74ddc('h1', {}, [("" + (json.label))]), ast$f1b74ddc('p', {}, ['Create new todo:', ("" + (json.newTodo))]), ast$f1b74ddc('form', {
      "action": "/add",
      "data-component-el": "form",
      "data-value": "current is: " + ("" + (json.label))
    }, [ast$f1b74ddc('div', {}, [ast$f1b74ddc('input', {
      "type": "text",
      "value": ("" + (json.newTodo)),
      "placeholder": "Add new todo",
      "data-component-el": "newTodo"
    }, []), ast$f1b74ddc('button', {
      "type": "submit"
    }, ['+'])])]), (function() {
      var ast$f1b74ddc$__1 = [];
      if (json.todos && json.todos.length > 0) {
        ast$f1b74ddc$__1.push(ast$f1b74ddc('ul', {
          "class": "m-todo__list"
        }, [(function() {
          var ast$f1b74ddc$__2 = [],
            ast$f1b74ddc$__3 = json.todos.length,
            i, todo;
          for (i = 0; i < ast$f1b74ddc$__3; i++) {
            todo = json.todos[i];
            ast$f1b74ddc$__2.push([ast$f1b74ddc('li', {
              "class": "m-todo__item"
            }, [ast$f1b74ddc('input', {
              "type": "checkbox"
            }, []), ast$f1b74ddc('em', {}, [("" + (todo.id))]), ':', ast$f1b74ddc('span', {}, [("" + (todo.text))]), ast$f1b74ddc('button', {
              "data-component-el": "delete",
              "data-id": ("" + (todo.id))
            }, ['X'])])]);
          }
          return ast$f1b74ddc$__2;
        }())]), ast$f1b74ddc('p', {}, ['Total todos:', ("" + (json.todos.length))]));
      };
      return ast$f1b74ddc$__1;
    }())])];
  };
};
