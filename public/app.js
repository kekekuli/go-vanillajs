import "./components/AnimatedLoading.js";
import "./components/MovieItem.js";
import "./components/YouTubeEmbed.js";
import { API } from "./services/API.js";
import { Router } from "./services/Router.js";
import Store from "./services/Store.js";

window.addEventListener("DOMContentLoaded", () => {
  app.Router.init();
});

window.app = {
  Store,
  Router,
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;

    app.Router.go("/movies?q=" + q);
  },
  api: API,
  showError: (message = "There was a error", goToHome = false) => {
    const dialog = document.getElementById("alert-modal");
    dialog.showModal();
    dialog.querySelector("p").textContent = message;
    if (goToHome) app.Router.go("/");
  },
  closeError: () => {
    document.getElementById("alert-modal").close();
  },
  searchOrderChange: (order) => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    const genre = urlParams.get("genre") ?? "";
    app.Router.go(`/movies?q=${q}&order=${order}&genre=${genre}`);
  },
  searchFilterChange: (genre) => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    const order = urlParams.get("order") ?? "";
    app.Router.go(`/movies?q=${q}&order=${order}&genre=${genre}`);
  },
  register: async (event) => {
    event.preventDefault();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const password_confirmation = document.getElementById(
      "register-password-confirmation",
    ).value;

    const errors = [];
    if (name.length < 4) errors.push("Enter your complete name");
    if (password.length < 7)
      errors.push("Enter a password at least 7 characters");
    if (email.length < 4) errors.push("Enter your complete email");
    if (password_confirmation != password) errors.push("Password don't match");

    if (errors.length == 0) {
      const response = await API.register(name, email, password);
      if (response.success) {
        app.Store.jwt = response.jwt;
        app.Router.go("/account/");
      } else {
        app.showError(response.message);
      }
    } else {
      app.showError(errors.join(". "));
    }
  },
  login: async (event) => {
    event.preventDefault();
    let errors = [];
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email.length < 8) errors.push("Enter your complete email");
    if (password.length < 7) errors.push("Enter a password with 7 characters");
    if (errors.length == 0) {
      const response = await API.login(email, password);
      if (response.success) {
        app.Store.jwt = response.jwt;
        app.Router.go("/account/");
      } else {
        app.showError(response.message);
      }
    } else {
      app.showError(errors.join(". "));
    }
  },
  logout: () => {
    app.Store.jwt = null;
    app.Router.go("/");
  },
  saveToCollection: async (movie_id, collection) => {
    if (app.Store.loggedIn) {
      try {
        const response = await API.saveToCollection(movie_id, collection);
        if (response.success) {
          switch (collection) {
            case "favorite":
              app.Router.go("/account/favorites")
              break;
            case "watchlist":
              app.Router.go("/account/watchlist")
          }
        } else {
          app.showError("We couldn't save the movie.")
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      app.Router.go("/account/");
    }
  }
};
