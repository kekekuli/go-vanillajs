const Router = {
  init: () => {
    window.addEventListener("popstate", () => {
      Router.go(location.pathname);

      //Go to the initial path
      Router.go(location.pathname + location.search);
    });
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState();
    }
  },
};
