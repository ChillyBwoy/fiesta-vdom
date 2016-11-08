module.exports = function(f$9258ccab) {
  // --- fest prolog ---
  var v$9258ccab$templates = {
    "test-template": function(params) {
      return [f$9258ccab('#fragment', {}, [f$9258ccab('div', {
        "data-id": ("" + (params.id))
      }, [f$9258ccab('h3', {
        "data-title": "Id of this block is " + ("" + (params.id))
      }, [('' + params.text)])])])];
    }
  };
  // --- end of fest prolog ---

  return function(json) {
    return f$9258ccab('#root', {}, [f$9258ccab('#comment', {}, 'this is comment'), f$9258ccab('div', {
      "class": "application",
      "data-role": "main",
      "data-id": "root"
    }, [f$9258ccab('style', {}, [f$9258ccab('#text', {}, '.preview {background: #EEE;padding: 10px;box-sizing: border-box;border: 1px solid #CCC;}')]), f$9258ccab('h1', {}, [f$9258ccab('#text', {}, 'Demo')]), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:value')]), f$9258ccab('div', {
      "class": "preview"
    }, [('' + json.hello)]), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:each')]), f$9258ccab('div', {
      "class": "preview"
    }, [f$9258ccab('ul', {}, [(function() {
      var v$9258ccab$1 = [],
        key, value;
      for (key in json.previewEach) {
        if (json.previewEach.hasOwnProperty(key)) {
          value = json.previewEach[key];
          v$9258ccab$1.push(f$9258ccab('li', {}, [('' + key), f$9258ccab('#text', {}, '='), ('' + value)]));
        }
      }
      return v$9258ccab$1;
    }())])]), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:for')]), f$9258ccab('div', {
      "class": "preview"
    }, [f$9258ccab('ul', {}, [(function() {
      var v$9258ccab$2 = [],
        i, value;
      for (i in json.previewFor) {
        if (json.previewFor.hasOwnProperty(i)) {
          value = json.previewFor[i];
          v$9258ccab$2.push(f$9258ccab('li', {}, [('' + value)]));
        }
      }
      return v$9258ccab$2;
    }())])]), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:if')]), f$9258ccab('div', {
      "class": "preview"
    }, [(function() {
      var v$9258ccab$3 = [];
      if (json.previewIf) {
        v$9258ccab$3.push(f$9258ccab('#text', {}, 'true'));
      };
      return v$9258ccab$3;
    }())]), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:set / fest:get')]), f$9258ccab('div', {
      "class": "preview"
    }, [v$9258ccab$templates['test-template']({}), v$9258ccab$templates['test-template']({})]), f$9258ccab('#cdata', {}, 'this is cdata]]>'), f$9258ccab('h2', {}, [f$9258ccab('#text', {}, 'fest:space')]), f$9258ccab('div', {
      "class": "preview"
    }, [f$9258ccab('#text', {}, 'Hello,'), ' ', f$9258ccab('#text', {}, 'world!')]), f$9258ccab('#comment', {}, 'this is another one')])]);
  };;
};
