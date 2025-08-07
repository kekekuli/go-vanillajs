export const API = {
  baseURL: "/api/",
  getTopMovies: async () => {
    return API.fetch("movies/top/");
  },
  getRandomMovies: async () => {
    return API.fetch("movies/random/");
  },
  getMovieById: async (id) => {
    return API.fetch(`movies/${id}`);
  },
  searchMovies: async (q, order, genre) => {
    return API.fetch(`movies/search/`, { q, order, genre });
  },
  getGenres: async () => {
    return await API.fetch("genres/");
  },
  register: async (name, email, password) => {
    return await API.send("account/register/", { name, email, password });
  },
  login: async (email, password) => {
    return await API.send("account/authentica/", { email, password });
  },
  send: async (serviceName, data) => {
    try {
      const response = await fetch(API.baseURL + serviceName, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch {
      console.error(e);
    }
  },
  fetch: async (serviceName, args) => {
    try {
      const queryString = args
        ? "?" + new URLSearchParams(args).toString()
        : "";
      const response = await fetch(API.baseURL + serviceName + queryString);
      const result = await response.json();
      return result;
    } catch {
      console.error(e);
    }
  },
};
