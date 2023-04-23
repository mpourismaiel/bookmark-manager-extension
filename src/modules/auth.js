import handlebars from "handlebars/dist/handlebars.runtime";

import { showModal, modalBackdrop, hideModal } from "./modal";
import { store } from "./store";
import { querySelector } from "./dynamic";
import { preventDefault, formValues } from "./forms";

const loginButton = document.querySelector("#menu");
const loginForm = querySelector("#login-form", modalBackdrop);
const registerForm = querySelector("#register-form", modalBackdrop);
const registerNavigateButton = querySelector("#register-button", modalBackdrop);
const loginNavigateButton = querySelector("#login-button", modalBackdrop);
const proceedNavigationButton = querySelector("#proceed", modalBackdrop);
const backNavigationButton = querySelector("#back", modalBackdrop);

export const {
  get: getUser,
  set: setUser,
  subscribe: subscribeUser,
} = store({ uuid: "", username: "", token: "" }, "user");

const {
  get: getRequestState,
  set: setRequestState,
  update: updateRequestState,
  subscribe: subscribeRequestState,
} = store({
  isShowingModal: false,
  loading: false,
  error: "",
  uuid: "",
  createdAccount: false,
  isCreatingAccount: false,
  isLoggingIn: false,
});

subscribeRequestState(async (state) => {
  if (!state.isShowingModal) {
    hideModal();
    return;
  }

  hideModal();
  await showModal(handlebars.templates["auth-modal"](state));

  loginNavigateButton((node) =>
    node.addEventListener("click", () =>
      setRequestState({ isShowingModal: true, isLoggingIn: true })
    )
  );
  registerNavigateButton((node) =>
    node.addEventListener("click", () =>
      setRequestState({ isShowingModal: true, isCreatingAccount: true })
    )
  );
  proceedNavigationButton((node) =>
    node.addEventListener("click", () =>
      setRequestState({ isShowingModal: false })
    )
  );
  backNavigationButton((node) =>
    node.addEventListener("click", () =>
      setRequestState({
        isShowingModal: true,
      })
    )
  );
  loginForm((node) =>
    node.addEventListener("submit", preventDefault(loginUser))
  );
  registerForm((node) =>
    node.addEventListener("submit", preventDefault(registerUser))
  );
});

loginButton.addEventListener("click", async () => {
  setRequestState({ isShowingModal: true });
});

const loginUser = async () => {
  updateRequestState({ loading: true, error: "" });
  const { username, password } = formValues["login-form"].values;
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const { uuid, token } = await response.json();
    setRequestState({ isShowingModal: false });
    setUser({ uuid, username, token });
  } else {
    updateRequestState({ error: (await response.json()).error });
  }
  updateRequestState({ loading: false });
};

const registerUser = async () => {
  updateRequestState({ loading: true, error: "" });
  const { username, password } = formValues["register-form"].values;
  const response = await fetch(`${process.env.API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const { uuid, token } = await response.json();
    setUser({ uuid, username, token });
    updateRequestState({ createdAccount: true, uuid });
  } else {
    updateRequestState({ error: (await response.json()).error });
  }
  updateRequestState({ loading: false });
};
