import handlebars from "handlebars/dist/handlebars.runtime";

const shortcutAddButton = document.querySelector("#shortcuts-add");

export const showAddShortcut = async () => {
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
