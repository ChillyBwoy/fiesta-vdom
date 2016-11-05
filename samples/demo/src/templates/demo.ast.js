module.exports = {
  "type": "fest:template",
  "attrs": {
    "xmlns:fest": "http://fest.mail.ru",
    "context_name": "json"
  },
  "children": [{
    "type": "fest:set",
    "attrs": {
      "name": "test-template"
    },
    "children": [{
      "type": "div",
      "attrs": {
        "data-id": "{params.id}"
      },
      "children": [{
        "type": "h3",
        "attrs": {},
        "children": [{
          "type": "fest:value",
          "attrs": {},
          "children": [{
            "type": "#text",
            "attrs": {},
            "children": ["params.text"]
          }]
        }]
      }]
    }]
  }, {
    "type": "div",
    "attrs": {},
    "children": [{
      "type": "style",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": [".preview {        background: #EEE;        padding: 10px;        box-sizing: border-box;        border: 1px solid #CCC;      }    "]
      }]
    }, {
      "type": "h1",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["Demo"]
      }]
    }, {
      "type": "h2",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["fest:value"]
      }]
    }, {
      "type": "div",
      "attrs": {
        "class": "preview"
      },
      "children": [{
        "type": "fest:value",
        "attrs": {},
        "children": [{
          "type": "#text",
          "attrs": {},
          "children": ["json.hello"]
        }]
      }]
    }, {
      "type": "h2",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["fest:each"]
      }]
    }, {
      "type": "div",
      "attrs": {
        "class": "preview"
      },
      "children": [{
        "type": "ul",
        "attrs": {},
        "children": [{
          "type": "fest:each",
          "attrs": {
            "iterate": "json.previewEach",
            "index": "key",
            "value": "value"
          },
          "children": [{
            "type": "li",
            "attrs": {},
            "children": [{
              "type": "fest:value",
              "attrs": {},
              "children": [{
                "type": "#text",
                "attrs": {},
                "children": ["key"]
              }]
            }, {
              "type": "#text",
              "attrs": {},
              "children": ["= "]
            }, {
              "type": "fest:value",
              "attrs": {},
              "children": [{
                "type": "#text",
                "attrs": {},
                "children": ["value"]
              }]
            }]
          }]
        }]
      }]
    }, {
      "type": "h2",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["fest:for"]
      }]
    }, {
      "type": "div",
      "attrs": {
        "class": "preview"
      },
      "children": [{
        "type": "ul",
        "attrs": {},
        "children": [{
          "type": "fest:each",
          "attrs": {
            "iterate": "json.previewFor",
            "index": "i",
            "value": "value"
          },
          "children": [{
            "type": "li",
            "attrs": {},
            "children": [{
              "type": "fest:value",
              "attrs": {},
              "children": [{
                "type": "#text",
                "attrs": {},
                "children": ["value"]
              }]
            }]
          }]
        }]
      }]
    }, {
      "type": "h2",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["fest:if"]
      }]
    }, {
      "type": "div",
      "attrs": {
        "class": "preview"
      },
      "children": [{
        "type": "fest:if",
        "attrs": {
          "test": "json.previewIf"
        },
        "children": [{
          "type": "#text",
          "attrs": {},
          "children": ["true      "]
        }]
      }]
    }, {
      "type": "h2",
      "attrs": {},
      "children": [{
        "type": "#text",
        "attrs": {},
        "children": ["fest:set / fest:get"]
      }]
    }, {
      "type": "div",
      "attrs": {
        "class": "preview"
      },
      "children": [{
        "type": "fest:get",
        "attrs": {
          "name": "test-template"
        },
        "children": [{
          "type": "fest:params",
          "attrs": {},
          "children": [{
            "type": "#text",
            "attrs": {},
            "children": ["{            id: 5,            text: 'test'          }        "]
          }]
        }]
      }, {
        "type": "fest:get",
        "attrs": {
          "name": "test-template"
        },
        "children": [{
          "type": "#text",
          "attrs": {},
          "children": ["{          id: 42,          text: 'lol'        }      "]
        }]
      }]
    }]
  }]
}
