import { HomePage } from "../components/HomePage.js";
import { MovieDetailPage } from "../components/MovieDetailsPage.js";
import { MoviesPage } from "../components/MoviePage.js";
import { ResgiterPage } from "../components/ResgiterPage.js";
import { LoginPage } from "../components/LoginPage.js";
import { AccountPage } from "../components/AccountPage.js";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: /\/movies\/(\d+)/,
    component: MovieDetailPage,
  },
  {
    path: "/movies",
    component: MoviesPage,
  },
  {
    path: "/account/register",
    component: ResgiterPage,
  },
  {
    path: "/account/login",
    component: LoginPage,
  },
  {
    path: "/account/",
    component: AccountPage,
  },
];
