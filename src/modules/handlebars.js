import handlebars from "handlebars/dist/handlebars.runtime";
globalThis.Handlebars = handlebars;
require("../templates");

handlebars.registerPartial(
  "shortcut-list",
  handlebars.templates["shortcut-list"]
);
handlebars.registerPartial("shortcut", handlebars.templates["shortcut"]);
