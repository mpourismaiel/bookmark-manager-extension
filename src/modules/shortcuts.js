import handlebars from "handlebars/dist/handlebars.runtime";
import sortable from "sortablejs";

import { store } from "./store";
import { listsDefault } from "./constants";
import { subscribeUser } from "./auth";

const listsContainer = document.querySelector("#lists");
const shortcutsEdit = document.querySelector("#shortcuts-edit");

export const {
  get: getLists,
  set: setLists,
  subscribe: subscribeLists,
} = store(listsDefault, "lists");

const {
  get: getState,
  set: setState,
  update: updateState,
  subscribe: subscribeState,
} = store({ isEditing: false, loading: false, error: "" });

subscribeUser(async (user) => {
  if (user.uuid) {
    setState({ loading: true });
    const response = await fetch(`${process.env.API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { lists } = await response.json();
      setLists(lists);
    } else {
      updateState({ error: (await response.json()).error });
    }
    updateState({ loading: false });
  }
});

subscribeLists((lists) => {
  listsContainer.innerHTML = handlebars.templates["shortcut-list-container"]({
    lists: lists.map((list) => ({
      ...list,
      shortcuts: list.shortcuts.map(({ title, url, icon, children }, i) => ({
        id: i,
        title,
        url,
        icon:
          icon || "https://s2.googleusercontent.com/s2/favicons?domain=" + url,
        children,
        hasChildren: children && children.length > 0,
      })),
    })),
  });

  Array.from(listsContainer.querySelectorAll(".shortcut")).forEach(
    (shortcut, i) => {
      shortcut
        .querySelector(".edit-actions .delete")
        .addEventListener("click", () => {
          setShortcuts(getShortcuts().filter((_, j) => i !== j));
        });
    }
  );
});

const changeOrder = (arr, m, n) => {
  const newArr = [...arr];
  const [item] = newArr.splice(m, 1);
  newArr.splice(n, 0, item);
  return newArr;
};

sortable.create(listsContainer, {
  animation: 150,
  ghostClass: "ghost-draggable",
  onEnd: (e) => {
    setShortcuts(changeOrder(getShortcuts(), e.oldIndex, e.newIndex));
  },
});
