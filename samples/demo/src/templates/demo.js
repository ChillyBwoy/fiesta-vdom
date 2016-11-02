module.exports = function(f$77813ff9) {
  var v$77813ff9_repo = {
    "test-template": function(params) {
      return [f$77813ff9('div', {
        "data-id": ("" + (params.id))
      }, [f$77813ff9('h3', {}, [("" + (params.text))])])];
    }
  };
  return function(json) {
    return [f$77813ff9('div', {}, [v$77813ff9_repo['test-template']({}), f$77813ff9('style', {}, ['.preview {\nbackground: #EEE;\npadding: 20px;\nbox-sizing: border-box;\nborder: 1px solid #CCC;\n}']), f$77813ff9('h1', {}, ['Demo']), f$77813ff9('h2', {}, ['fest:value']), f$77813ff9('div', {
      "class": "preview"
    }, [("" + (json.hello))]), f$77813ff9('h2', {}, ['fest:each']), f$77813ff9('div', {
      "class": "preview"
    }, [f$77813ff9('ul', {}, [(function() {
      var v$77813ff9_1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          v$77813ff9_1.push([f$77813ff9('li', {}, [("" + (key)), '=', ("" + (value))])]);
        }
      }
      return v$77813ff9_1;
    }())])]), f$77813ff9('h2', {}, ['fest:for']), f$77813ff9('div', {
      "class": "preview"
    }, [f$77813ff9('ul', {}, [(function() {
      var v$77813ff9_2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          v$77813ff9_2.push([f$77813ff9('li', {}, [("" + (value))])]);
        }
      }
      return v$77813ff9_2;
    }())])]), f$77813ff9('h2', {}, ['fest:if']), f$77813ff9('div', {
      "class": "preview"
    }, [(function() {
      var v$77813ff9_3 = [];
      if (json.previewIf) {
        v$77813ff9_3.push('true');
      };
      return v$77813ff9_3;
    }())])])];
  };
};
