const handlebars = require("handlebars/dist/handlebars.runtime");
globalThis.Handlebars = handlebars;
require("../build/templates");

handlebars.registerPartial(
  "shortcut-list",
  handlebars.templates["shortcut-list"]
);
handlebars.registerPartial("shortcut", handlebars.templates["shortcut"]);

module.exports = handlebars;
