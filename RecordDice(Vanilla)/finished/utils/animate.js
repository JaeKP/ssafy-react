const animate = (() => {
  let clearId;
  return function recursion(callback, FPS = 60) {
    callback?.();
    clearId = setTimeout(recursion.bind(null, callback, FPS), 1000 / FPS);
    return () => clearTimeout(clearId);
  };
})();
