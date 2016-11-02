module.exports = function(f$ca0fb338) {
  var v$ca0fb338_templates = {
    "test-template": function(params) {
      return [f$ca0fb338('div', {
        "data-id": ("" + (params.id))
      }, [f$ca0fb338('h3', {}, [("" + (params.text))])])];
    }
  };
  return function(json) {
    return [f$ca0fb338('div', {}, [f$ca0fb338('style', {}, ['.preview {\nbackground: #EEE;\npadding: 10px;\nbox-sizing: border-box;\nborder: 1px solid #CCC;\n}']), f$ca0fb338('h1', {}, ['Demo']), f$ca0fb338('h2', {}, ['fest:value']), f$ca0fb338('div', {
      "class": "preview"
    }, [("" + (json.hello))]), f$ca0fb338('h2', {}, ['fest:each']), f$ca0fb338('div', {
      "class": "preview"
    }, [f$ca0fb338('ul', {}, [(function() {
      var v$ca0fb338_1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          v$ca0fb338_1.push([f$ca0fb338('li', {}, [("" + (key)), '=', ("" + (value))])]);
        }
      }
      return v$ca0fb338_1;
    }())])]), f$ca0fb338('h2', {}, ['fest:for']), f$ca0fb338('div', {
      "class": "preview"
    }, [f$ca0fb338('ul', {}, [(function() {
      var v$ca0fb338_2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          v$ca0fb338_2.push([f$ca0fb338('li', {}, [("" + (value))])]);
        }
      }
      return v$ca0fb338_2;
    }())])]), f$ca0fb338('h2', {}, ['fest:if']), f$ca0fb338('div', {
      "class": "preview"
    }, [(function() {
      var v$ca0fb338_3 = [];
      if (json.previewIf) {
        v$ca0fb338_3.push('true');
      };
      return v$ca0fb338_3;
    }())]), f$ca0fb338('h2', {}, ['fest:set / fest:get']), f$ca0fb338('div', {
      "class": "preview"
    }, [v$ca0fb338_templates['test-template']({}), v$ca0fb338_templates['test-template']({})])])];
  };
};
