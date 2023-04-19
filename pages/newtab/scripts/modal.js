const { setupForms, removeForms, stopPropagation } = require("./forms");
const { setupTabs } = require("./tabs");

const modalBackdrop = document.querySelector("#backdrop");

async function observeElementChanges(fn) {
  const result = fn();
  if (result) return result;

  await new Promise((resolve) => requestAnimationFrame(resolve));

  return observeElementChanges(fn);
}

const showModal = async (template) => {
  modalBackdrop.innerHTML = template;
  const modal = await observeElementChanges(() =>
    modalBackdrop.querySelector("[data-modal]")
  );
  setupTabs(modalBackdrop);
  setupForms(modalBackdrop);
  modal.addEventListener("click", stopPropagation());

  modalBackdrop.classList.remove("hide");
  modal.classList.remove("hide");
  modalBackdrop.addEventListener("click", hideModal, { once: true });
};

const hideModal = async () => {
  modalBackdrop.innerHTML = "";
  modalBackdrop.classList.add("hide");
  removeForms(modalBackdrop);
};

module.exports = { showModal, hideModal, modalBackdrop };
