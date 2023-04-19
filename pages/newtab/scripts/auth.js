const { showModal, modalBackdrop, hideModal } = require("./modal");
const { store } = require("./store");
const handlebars = require("./handlebars");
const { querySelector } = require("./dynamic");
const { preventDefault } = require("./forms");

const loginButton = document.querySelector("#menu");
const loginUUID = querySelector("#login-uuid", modalBackdrop);
const loginError = querySelector("#login-form .error p", modalBackdrop);
const loginForm = querySelector("#login-form", modalBackdrop);

const {
  get: getUser,
  set: setUser,
  subscribe: subscribeUser,
} = store({ uuid: "", username: "", token: "" }, "user");

const {
  get: getRequestState,
  set: setRequestState,
  subscribe: subscribeRequestState,
} = store({ loading: false, error: "" });

loginButton.addEventListener("click", async () => {
  await showModal(handlebars.templates["auth-modal"]());

  if (getUser().uuid) {
    loginUUID().innerHTML = getUser().uuid;
  } else {
    await registerUser();
  }

  loginForm.addEventListener("submit", preventDefault(loginUser));
});

const loginUser = async () => {
  if (!formValues["login-form"].values.username) {
    setRequestState({ loading: false, error: "Username or UUID is required" });
    return;
  }

  setRequestState({ loading: true, error: "" });
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues["login-form"].values),
  });

  const result = await response.json();
  setRequestState({ loading: false, error: "" });
  setUser(result);
  loginUUID().innerHTML = result.uuid;
  hideModal();
};

const registerUser = async () => {
  const response = await fetch(`${process.env.API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  setRequestState({ loading: true, error: "" });
  const result = await response.json();
  setRequestState({ loading: false, error: "" });
  loginUUID().innerHTML = result.uuid;

  setUser(result);
};

subscribeRequestState(({ loading, error }) => {
  if (!loginUUID()) {
    return;
  }

  loginError().innerHTML = "";

  if (loading) {
    loginUUID().innerHTML = "Loading...";
    loginUUID().classList.add("loading");
  } else {
    loginUUID().innerHTML = "";
    loginUUID().classList.remove("loading");
  }

  if (error) {
    loginError().innerHTML = error;
  }
});

module.exports = { subscribeUser };
