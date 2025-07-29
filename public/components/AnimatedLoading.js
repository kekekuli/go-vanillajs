class AnimatedLoading extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const elements = this.dataset.elements;
    const width = this.dataset.width;
    const height = this.dataset.height;

    for (let i = 0; i < elements; i++) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("loading-wave");
      wrapper.style.width = width;
      wrapper.style.height = height;
      wrapper.style.margin = "10px";
      wrapper.style.display = "inline-block";
      wrapper.style.position = "relative";

      const square_placeholder = document.createElement("div");
      square_placeholder.classList.add("loading-wave");
      square_placeholder.style.position = "absolute";
      square_placeholder.style.width = "35%";
      square_placeholder.style.height = "35%";
      square_placeholder.style.top = "10px";
      square_placeholder.style.left = "10px";
      wrapper.appendChild(square_placeholder);

      this.appendChild(wrapper);
    }
  }
}

customElements.define("animated-loading", AnimatedLoading);
