import { API } from "./services/API";

window.app = {
  search: (event) => {
    event.preventDefault();
    const q = document.querySelector("input[type=search]").value;
  },
  api: API
};

