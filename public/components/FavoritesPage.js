import { CollectionPage } from "./CollectionPage.js";

export class FavoritePage extends CollectionPage {
  constructor() {
    super(app.api.getFavorites, "Favorite Movies");
  }
}
customElements.define("favorite-page", FavoritePage);
