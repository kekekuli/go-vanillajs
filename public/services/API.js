export const API = {
  getTopMovies: async () => {
    const response = await fetch("/api/movies/top/");
  },
};
