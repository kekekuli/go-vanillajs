import { CollectionPage } from "./CollectionPage.js";

export class WatchlistPage extends CollectionPage {
  constructor() {
    super(app.api.getWatchlist, "Movie Watchlist");
  }
}
customElements.define("watchlist-page", WatchlistPage);
