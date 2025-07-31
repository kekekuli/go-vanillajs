import "./components/AnimatedLoading.js";
import "./components/MovieItem.js";
import "./components/YouTubeEmbed.js";
import { API } from "./services/API.js";
import { Router } from "./services/Router.js";

window.addEventListener("DOMContentLoaded", () => {
  app.Router.init();
});

window.app = {
  Router,
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;
  },
  api: API,
  showError: (message = "There was a error", goToHome = true) => {
    const dialog = document.getElementById("alert-modal");
    dialog.showModal();
    dialog.querySelector("p").textContent = message
    if (goToHome) app.Router.go("/");
  },
  closeError: () => {
    document.getElementById("alert-modal").close();
  }
};
