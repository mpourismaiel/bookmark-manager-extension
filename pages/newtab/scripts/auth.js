const { showModal } = require("./modal");
const handlebars = require("./handlebars");

const loginButton = document.querySelector("#menu");

loginButton.addEventListener("click", async () => {
  await showModal(handlebars.templates["auth-modal"]());
});
