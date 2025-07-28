import { API } from "./services/API.js";

import "./components/HomePage.js"

window.app = {
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;
  },
  api: API
};

