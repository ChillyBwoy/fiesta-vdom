export type ASTNodeAttrVal = string | boolean;
export interface ASTNodeAttrs {
  [name:string]: string;
}

function setAttr ($el, name: string, value) {
  if (name === 'value') {
    $el.value = value;
  } else {
    $el.setAttribute(name, value);
  }
  return $el;
}

function removeAttr ($el, name: string, value) {
  if (typeof value === 'string') {
    setAttr($el, name, '');
  } else {
    $el.removeAttribute(name);
  }
  return $el;
}

function updateAttr ($el, name: string, newVal?: ASTNodeAttrVal, oldVal?: ASTNodeAttrVal) {
  if (!newVal) {
    removeAttr($el, name, newVal);
  } else if (!oldVal || newVal !== oldVal) {
    setAttr($el, name, newVal);
  }
  return $el;
}

export function setAttrs ($el, attrs: ASTNodeAttrs) {
  Object.keys(attrs).forEach(name => {
    setAttr($el, name, attrs[name]);
  });
  return $el;
}

export function updateAttrs ($el, newAttrs: ASTNodeAttrs, oldAttrs: ASTNodeAttrs = {}) {
  const attrs = Object.assign({}, oldAttrs, newAttrs);
  Object.keys(attrs).forEach(name => {
    updateAttr($el, name, newAttrs[name], oldAttrs[name]);
  });
  return $el;
}
