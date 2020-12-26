import "./App.css";

import { BrowserRouter, Route, Link, Switch, Redirect } from "./react-router-dom";

function User() {
  return <div>user</div>;
}

function Order(props) {
  return <div>orderId: {props.match.params.id}</div>;
}

function Login(props) {
  function handleLogin() {
    localStorage.setItem("login", true);
    if (props.location.state) {
      props.history.push(props.location.state.from);
    } else {
      props.history.push("/order/10");
    }
  }
  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/user">user</Link>
        <Link to="/order/10">order</Link>
        <Switch>
          <Route
            path="/user"
            render={() => {
              if (localStorage.getItem("login")) {
                return <User />;
              } else {
                return <Redirect to={{ pathname: "/login", state: { from: "/user" } }} />;
              }
            }}
          />
          <Route
            path="/order/:id"
            component={Order}
            // render={(routeProps) => {
            //   return <Order {...routeProps} />;
            // }}
          />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
