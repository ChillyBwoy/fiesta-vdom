module.exports = function(ast$6be7f4de) {
  return function(json) {
    return [ast$6be7f4de('div', {}, [ast$6be7f4de('style', {}, ['.preview {\nbackground: #EEE;\npadding: 20px;\nbox-sizing: border-box;\nborder: 1px solid #CCC;\n}']), ast$6be7f4de('h1', {}, ['Demo']), ast$6be7f4de('h2', {}, ['fest:value']), ast$6be7f4de('div', {
      "class": "preview"
    }, [("" + (json.hello))]), ast$6be7f4de('h2', {}, ['fest:each']), ast$6be7f4de('div', {
      "class": "preview"
    }, [ast$6be7f4de('ul', {}, [(function() {
      var ast$6be7f4de$__1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          ast$6be7f4de$__1.push([ast$6be7f4de('li', {}, [("" + (key)), '=', ("" + (value))])]);
        }
      }
      return ast$6be7f4de$__1;
    }())])]), ast$6be7f4de('h2', {}, ['fest:for']), ast$6be7f4de('div', {
      "class": "preview"
    }, [ast$6be7f4de('ul', {}, [(function() {
      var ast$6be7f4de$__2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          ast$6be7f4de$__2.push([ast$6be7f4de('li', {}, [("" + (value))])]);
        }
      }
      return ast$6be7f4de$__2;
    }())])]), ast$6be7f4de('h2', {}, ['fest:if']), ast$6be7f4de('div', {
      "class": "preview"
    }, [(function() {
      var ast$6be7f4de$__3 = [];
      if (json.previewIf) {
        ast$6be7f4de$__3.push('true');
      };
      return ast$6be7f4de$__3;
    }())])])];
  };
};
