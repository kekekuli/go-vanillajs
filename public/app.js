import "./components/AnimatedLoading.js"
import { API } from "./services/API.js";
import { HomePage } from "./components/HomePage.js";
import { MovieItemComponent } from "./components/MovieItem.js";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main").appendChild(new HomePage());
  document.querySelector("main").appendChild(new MovieItemComponent());
})

window.app = {
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;
  },
  api: API
};
