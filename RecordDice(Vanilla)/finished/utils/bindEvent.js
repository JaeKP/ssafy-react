function bindEvent(element, eventType, eventListener) {
  if (element?.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError(
      'bindEvent 함수의 첫번째 인자 값은 DOM 요소 노드가 아닙니다.'
    );
  }
  if (typeof eventType !== 'string') {
    throw new SyntaxError(
      'bindEvent 함수의 두번째 인자 값은 유효한 이벤트 타입(문자)이 아닙니다.'
    );
  }

  if (typeof eventListener !== 'function') {
    throw new SyntaxError('bindEvent 함수의 세번째 인자 값은 함수가 아닙니다.');
  }

  element?.addEventListener(eventType, eventListener);

  return () => element?.removeEventListener(eventType, eventListener);
}
