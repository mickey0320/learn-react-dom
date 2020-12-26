function createHashHistory() {
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
  function setState(newState) {}
  window.addEventListener("hashchange", () => {
    // const newLocation = { pathname, state: null };
    setState({});
  });
  function push(pathname, state) {
    const action = "PUSH";
    window.location.hash = pathname;
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

export default createHashHistory;
