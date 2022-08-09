function enableElement(element) {
  if (element?.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      'enableElement 함수는 DOM 요소 노드에만 적용 가능합니다.'
    );
  element.disabled = false;
}

function disableElement(element) {
  if (element?.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      'disableElement 함수는 DOM 요소 노드에만 적용 가능합니다.'
    );
  element.disabled = true;
}

function visibleElement(element) {
  if (element?.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      'visibleElement 함수는 DOM 요소 노드에만 적용 가능합니다.'
    );
  element.hidden = false;
}

function invisibleElement(element) {
  if (element?.nodeType !== document.ELEMENT_NODE)
    throw new TypeError(
      'invisibleElement 함수는 DOM 요소 노드에만 적용 가능합니다.'
    );
  element.hidden = true;
}
