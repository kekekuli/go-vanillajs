import "./components/AnimatedLoading.js";
import "./components/MovieItem.js";
import "./components/YouTubeEmbed.js";
import { API } from "./services/API.js";
import { HomePage } from "./components/HomePage.js";
import { MovieDetailPage } from "./components/MovieDetailsPage.js";

window.addEventListener("DOMContentLoaded", () => {
  // document.querySelector("main").appendChild(new HomePage());
  document.querySelector("main").appendChild(new MovieDetailPage());
});

window.app = {
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;
  },
  api: API,
};
