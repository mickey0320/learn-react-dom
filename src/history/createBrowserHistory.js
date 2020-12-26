function createBrowserHistory() {
  const originHistory = window.history;
  let listeners = [];
  function go(n) {
    originHistory.go(n);
  }
  function goBack() {
    originHistory.go(-1);
  }
  function goForward() {
    originHistory.go(1);
  }
  function listen(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }
  function setState(newState) {
    Object.assign(history, newState);
    history.length = originHistory.length;
    listeners.forEach((l) => l(history.location));
  }
  function push(pathname, state) {
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    }
    const action = "PUSH";
    originHistory.pushState(state, "", pathname);
    const newLocation = { pathname, state };
    setState({ location: newLocation, action });
  }
  const history = {
    action: "POP",
    length: originHistory.length,
    push,
    go,
    goBack,
    goForward,
    listen,
    location: { pathname: window.location.pathname, state: originHistory.state },
  };

  return history;
}

export default createBrowserHistory;
