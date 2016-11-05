module.exports = function(f$64effc6c) {
  var v$64effc6c_templates = {
    "test-template": function(params) {
      return [f$64effc6c('div', {
        "data-id": ("" + (params.id))
      }, [f$64effc6c('h3', {}, [("" + (params.text))])])];
    }
  };
  var v$64effc6c_globals = {};
  return function(json) {
    return [f$64effc6c('div', {}, [f$64effc6c('style', {}, [f$64effc6c('#text', {}, ['.preview {        \nbackground: #EEE;        \npadding: 10px;        \nbox-sizing: border-box;        \nborder: 1px solid #CCC;      \n}    '])]), f$64effc6c('h1', {}, [f$64effc6c('#text', {}, ['Demo'])]), f$64effc6c('h2', {}, [f$64effc6c('#text', {}, ['fest:value'])]), f$64effc6c('div', {
      "class": "preview"
    }, [("" + (json.hello))]), f$64effc6c('h2', {}, [f$64effc6c('#text', {}, ['fest:each'])]), f$64effc6c('div', {
      "class": "preview"
    }, [f$64effc6c('ul', {}, [(function() {
      var v$64effc6c_1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          v$64effc6c_1.push([f$64effc6c('li', {}, [("" + (key)), f$64effc6c('#text', {}, ['= ']), ("" + (value))])]);
        }
      }
      return v$64effc6c_1;
    }())])]), f$64effc6c('h2', {}, [f$64effc6c('#text', {}, ['fest:for'])]), f$64effc6c('div', {
      "class": "preview"
    }, [f$64effc6c('ul', {}, [(function() {
      var v$64effc6c_2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          v$64effc6c_2.push([f$64effc6c('li', {}, [("" + (value))])]);
        }
      }
      return v$64effc6c_2;
    }())])]), f$64effc6c('h2', {}, [f$64effc6c('#text', {}, ['fest:if'])]), f$64effc6c('div', {
      "class": "preview"
    }, [(function() {
      var v$64effc6c_3 = [];
      if (json.previewIf) {
        v$64effc6c_3.push(f$64effc6c('#text', {}, ['true      ']));
      };
      return v$64effc6c_3;
    }())]), f$64effc6c('h2', {}, [f$64effc6c('#text', {}, ['fest:set / fest:get'])]), f$64effc6c('div', {
      "class": "preview"
    }, [v$64effc6c_templates['test-template']({}), v$64effc6c_templates['test-template']({})])])];
  };
};
