module.exports = function(f$bc23d178) {

  // --- fest prolog ---
  var v$bc23d178$templates = {
    "test-template": function(params) {
      return [f$bc23d178('#fragment', {}, [f$bc23d178('div', {
        "data-id": ("" + (params.id))
      }, [f$bc23d178('h3', {}, [('' + params.text)])])])];
    }
  };
  // --- end of fest prolog ---


  return function(json) {
    return f$bc23d178('#fragment', {}, [f$bc23d178('div', {}, [f$bc23d178('style', {}, [f$bc23d178('#text', {}, ['.preview {background: #EEE;padding: 10px;box-sizing: border-box;border: 1px solid #CCC;}'])]), f$bc23d178('h1', {}, [f$bc23d178('#text', {}, ['Demo'])]), f$bc23d178('h2', {}, [f$bc23d178('#text', {}, ['fest:value'])]), f$bc23d178('div', {
      "class": "preview"
    }, [('' + json.hello)]), f$bc23d178('h2', {}, [f$bc23d178('#text', {}, ['fest:each'])]), f$bc23d178('div', {
      "class": "preview"
    }, [f$bc23d178('ul', {}, [(function() {
      var v$bc23d178$1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          v$bc23d178$1.push([f$bc23d178('li', {}, [('' + key), f$bc23d178('#text', {}, ['=']), ('' + value)])]);
        }
      }
      return v$bc23d178$1;
    }())])]), f$bc23d178('h2', {}, [f$bc23d178('#text', {}, ['fest:for'])]), f$bc23d178('div', {
      "class": "preview"
    }, [f$bc23d178('ul', {}, [(function() {
      var v$bc23d178$2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          v$bc23d178$2.push([f$bc23d178('li', {}, [('' + value)])]);
        }
      }
      return v$bc23d178$2;
    }())])]), f$bc23d178('h2', {}, [f$bc23d178('#text', {}, ['fest:if'])]), f$bc23d178('div', {
      "class": "preview"
    }, [(function() {
      var v$bc23d178$3 = [];
      if (json.previewIf) {
        v$bc23d178$3.push(f$bc23d178('#text', {}, ['true']));
      };
      return v$bc23d178$3;
    }())]), f$bc23d178('h2', {}, [f$bc23d178('#text', {}, ['fest:set / fest:get'])]), f$bc23d178('div', {
      "class": "preview"
    }, [v$bc23d178$templates['test-template']({}), v$bc23d178$templates['test-template']({})])])]);
  };;
};
