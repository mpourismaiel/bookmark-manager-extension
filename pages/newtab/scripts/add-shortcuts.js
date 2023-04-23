const handlebars = require("./handlebars");

const shortcutAddButton = document.querySelector("#shortcuts-add");

const showAddShortcut = async () => {
  await showModal(handlebars.templates["add-shortcut-modal"]());
  const addShortcutModalForm = document.querySelector("#add-shortcut-form");
  const addShortcutModalRelatedForm = document.querySelector(
    "#add-shortcut-form-related"
  );

  addShortcutModalForm.addEventListener(
    "submit",
    preventDefault(addShortcut())
  );
  addShortcutModalRelatedForm.addEventListener(
    "submit",
    preventDefault(addShortcut("related"))
  );
};

module.exports = { showAddShortcut };
