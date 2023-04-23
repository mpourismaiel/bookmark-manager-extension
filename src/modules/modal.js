import { observeElementChanges } from "./dynamic";
import { setupForms, removeForms, stopPropagation } from "./forms";
import { setupTabs } from "./tabs";

export const modalBackdrop = document.querySelector("#backdrop");

export const showModal = async (template) => {
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

export const hideModal = async () => {
  modalBackdrop.innerHTML = "";
  modalBackdrop.classList.add("hide");
  removeForms(modalBackdrop);
};
