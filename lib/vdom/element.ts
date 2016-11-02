import { setAttrs, updateAttrs, ASTNodeAttrs } from './attrs';

export interface IASTNode {
  type: string;
  attrs: ASTNodeAttrs;
  children: ASTNode[]
}
export type ASTNode = IASTNode & string;

function flat (xs: any[]): any[] {
  return Array.prototype.concat.apply([], xs);
} 

export function getNode (type, attrs, children): IASTNode {
  return {
    type,
    attrs,
    children: flat(children)
  };
}

function createChildren (children: ASTNode[]) {
  let $fragment = document.createDocumentFragment();

  children.forEach((item) => {
    let $el = createElement(item);
    if ($el) {
      $fragment.appendChild($el);
    }
  });
  return $fragment;
}

function createElement (ast: ASTNode) {
  if (typeof ast === 'string') {
    return document.createTextNode(ast);
  } else if (Array.isArray(ast)) {
    return createChildren(ast);
  } else {
    const { type, attrs, children } = ast;
    const $el = setAttrs(document.createElement(type), attrs);

    if (children.length > 0) {
      $el.appendChild(createChildren(children));
    }
    return $el;
  }
}

function changed (node1: ASTNode, node2: ASTNode): boolean {
  return (typeof node1 !== typeof node2) ||
         (node1.type !== node2.type) ||
         (typeof node1 === 'string' && node1 !== node2) ||
         (typeof node2 === 'string' && node1 !== node2);
}

function resolveNodes (node1?: ASTNode, node2?: ASTNode) {
  if (Array.isArray(node1) && Array.isArray(node2)) {
    return {
      node1: node1[0],
      node2: node2[0]
    };
  } else if (Array.isArray(node1) && !Array.isArray(node2)) {
    return {
      node1: node1[0],
      node2
    };
  } else if (!Array.isArray(node1) && Array.isArray(node2)) {
    return {
      node1,
      node2: node2[0]
    };
  } else {
    return {
      node1,
      node2
    };
  }
}

function updateElement ($parent, newNode?: ASTNode, oldNode?: ASTNode, index: number = 0) {
  const { node1, node2 } = resolveNodes(newNode, oldNode);
  if (!node2) {
    $parent.appendChild(
      createElement(node1)
    );
  } else if (!node1) {
    $parent.removeChild(
      $parent.childNodes[index]
    );
  } else if (changed(node1, node2)) {
    $parent.replaceChild(
      createElement(node1),
      $parent.childNodes[index]
    );
  } else if (typeof node1 === 'string' || typeof node2 === 'string') {
    if (node1 !== node2) {
      $parent.replaceChild(
        createElement(node1),
        $parent.childNodes[index]
      );
    }
  } else {
    updateAttrs($parent.childNodes[index], node1.attrs, node2.attrs);
    const newLength = node1.children.length;
    const oldLength = node2.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        node1.children[i],
        node2.children[i],
        i
      );
    }
  }
}

export function createVDOM ($parent, ast) {
  const template = ast(getNode);
  let curr = null;

  return {
    update(data: any) {
      if (curr === null) {
        curr = template(data);
        updateElement($parent, curr);
      } else {
        let next = template(data);
        updateElement($parent, next, curr);
        curr = next;
      }
    }
  };
}
