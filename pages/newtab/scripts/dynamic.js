const querySelector =
  (selector, scope = document) =>
  () =>
    scope.querySelector(selector);

module.exports = { querySelector };
