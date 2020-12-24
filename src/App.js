import "./App.css";

import { BrowserRouter, Route, Link, Switch } from "./react-router-dom";

function User() {
  return <div>user</div>;
}

function Order(props) {
  return <div>orderId: {props.match.params.id}</div>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/user">user</Link>
        <Link to="/order/10">order</Link>
        <Switch>
          <Route path="/user" component={User} />
          <Route
            path="/order/:id"
            component={Order}
            // render={(routeProps) => {
            //   return <Order {...routeProps} />;
            // }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
