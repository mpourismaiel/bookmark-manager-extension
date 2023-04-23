const querySelector =
  (selector, scope = document) =>
  (fn) => {
    const element = scope.querySelector(selector);
    if (element) return fn(element);
    return null;
  };

async function observeElementChanges(fn) {
  const result = fn();
  if (result) return result;

  await new Promise((resolve) => requestAnimationFrame(resolve));

  return observeElementChanges(fn);
}

module.exports = { querySelector, observeElementChanges };
