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
  fetch: async (serviceName, args) => {
    try {
      const queryString = args ? new URLSearchParams(args).toString() : "";
      const response = await fetch(
        API.baseURL + serviceName + "?" + queryString,
      );
      const result = await response.json();
      return result;
    } catch {
      console.error(e);
    }
  },
};
