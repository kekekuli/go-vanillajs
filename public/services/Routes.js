import { HomePage } from "../components/HomePage.js";
import { MovieDetailPage } from "../components/MovieDetailsPage.js";
import { MoviePage } from "../components/MoviePage.js";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: /\/movie\/(\d+)/,
    component: MovieDetailPage,
  },
  {
    path: "/movies",
    component: MoviePage,
  },
];
