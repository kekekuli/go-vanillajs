import { API } from "../services/API.js"

export class MovieDetailPage extends HTMLElement {
  id = 14
  movie = null
  constructor() {
    super();
  }
  async render() {
    try {
      this.movie = await API.getMovieById(this.id);
    } catch {
      alert("Movie doesn't exist");
      return;
    }

    const template = document.getElementById("template-movie-details");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    this.querySelector("h2").textContent = this.movie.title;
    this.querySelector("h3").textContent = this.movie.tagline;
  }
  connectedCallback() {
    const id = this.dataset.id;

    this.render();
  }
}

customElements.define("movie-detail-page", MovieDetailPage);
