export class MoviePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p>Oops! Not implemented yet.</p>
    `
  }
}

customElements.define("movie-page", MoviePage);
