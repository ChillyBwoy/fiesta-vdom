module.exports = function(ast$e0161078) {
  return function(json) {
    return [ast$e0161078('div', {
      "data-id": "todos"
    }, [ast$e0161078('h1', {}, [("" + (json.label))]), ast$e0161078('p', {}, ['Create new todo:', ("" + (json.newTodo))]), ast$e0161078('form', {
      "action": "/add",
      "data-component-el": "form",
      "data-value": "current is: " + ("" + (json.label))
    }, [ast$e0161078('div', {}, [ast$e0161078('input', {
      "type": "text",
      "value": ("" + (json.newTodo)),
      "placeholder": "Add new todo",
      "data-component-el": "newTodo"
    }, []), ast$e0161078('button', {
      "type": "submit"
    }, ['+'])])]), (function() {
      var ast$e0161078$__1 = [];
      if (json.todos && json.todos.length > 0) {
        ast$e0161078$__1.push(ast$e0161078('ul', {
          "class": "m-todo__list"
        }, [(function() {
          var ast$e0161078$__2 = [],
            ast$e0161078$__3 = json.todos.length,
            i, todo;
          for (i = 0; i < ast$e0161078$__3; i++) {
            todo = json.todos[i];
            ast$e0161078$__2.push([ast$e0161078('li', {
              "class": "m-todo__item"
            }, [ast$e0161078('input', {
              "type": "checkbox"
            }, []), ast$e0161078('em', {}, [("" + (todo.id))]), ':', ast$e0161078('span', {}, [("" + (todo.text))]), ast$e0161078('button', {
              "data-component-el": "delete",
              "data-id": ("" + (todo.id))
            }, ['X'])])]);
          }
          return ast$e0161078$__2;
        }())]), ast$e0161078('p', {}, ['Total todos:', ("" + (json.todos.length))]));
      };
      return ast$e0161078$__1;
    }())])];
  };
};
