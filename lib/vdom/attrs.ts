import { FiestaElement } from "./element";

export type ASTNodeAttrVal = string | boolean;
export interface ASTNodeAttrs {
  [name:string]: string;
}

function setAttr ($el, name: string, value): FiestaElement {
  $el.setAttribute(name, value);
  return $el;
}

function removeAttr ($el, name: string) : FiestaElement{
  $el.removeAttribute(name);
  return $el;
}

function updateAttr ($el, name: string, newVal?: ASTNodeAttrVal, oldVal?: ASTNodeAttrVal): FiestaElement {
  if (!newVal) {
    removeAttr($el, name);
  } else if (!oldVal || newVal !== oldVal) {
    setAttr($el, name, newVal);
  }
  return $el;
}

export function setAttrs ($el, attrs: ASTNodeAttrs): FiestaElement {
  Object.keys(attrs).forEach(name => {
    setAttr($el, name, attrs[name]);
  });
  return $el;
}

export function updateAttrs ($el, newAttrs: ASTNodeAttrs, oldAttrs: ASTNodeAttrs = {}): FiestaElement {
  const attrs = Object.assign({}, newAttrs, oldAttrs);
  Object.keys(attrs).forEach(name => {
    updateAttr($el, name, newAttrs[name], oldAttrs[name]);
  });
  return $el;
}
